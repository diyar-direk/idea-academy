import axiosInstance from "./axios";
import DBkeys from "../constant/DBkeys";

class APIClient {
  constructor(endPoint) {
    this.endPoint = endPoint;
  }
  getAll = async ({ page = 1, limit = 10, ...params }) => {
    const allParams = {
      ...params,
      [DBkeys.page]: page,
      [DBkeys.limit]: limit,
    };

    const paramFilters = new URLSearchParams();

    Object.entries(allParams).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") return;

      if (Array.isArray(value)) {
        const cleanedArray = value
          .map((v) => v?.[DBkeys.id] ?? v?.value ?? v)
          .filter((v) => v !== null && v !== undefined && v !== "");

        if (cleanedArray.length > 0) {
          paramFilters.append(key, cleanedArray.join(","));
        }
      } else {
        paramFilters.append(key, value[DBkeys.id] || value);
      }
    });

    const { data } = await axiosInstance.get(this.endPoint, {
      params: paramFilters,
    });

    const { total, total_pages, data: d } = data;

    return {
      data: d || data,
      totalCount: total || 0,
      limit,
      total_pages: total_pages || Math.floor(total / limit),
    };
  };

  getOne = async (id) => {
    const { data } = await axiosInstance.get(`${this.endPoint}${id}`);
    return data?.data || data;
  };
  deleteAll = async ({ ids }) => {
    await axiosInstance.delete(this.endPoint, { data: { ids } });
  };
  deleteOne = async (id) => {
    await axiosInstance.delete(`${this.endPoint}/${id}`);
  };
  addData = async (d) => {
    const { data } = await axiosInstance.post(this.endPoint, d);
    return data.data || data;
  };
  updateData = async ({ data, id }) => {
    const { data: res } = await axiosInstance.patch(
      `${this.endPoint}${id}/`,
      data,
    );

    return res.data;
  };
}
export default APIClient;
