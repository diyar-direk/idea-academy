import DBkeys from "../constants/DBkeys";

export const formatInputsData = (data = {}) => {
  const formatted = {};

  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      formatted[key] = value.map(
        (item) => item?.[DBkeys.id] ?? item?.value ?? item,
      );
    } else {
      if (value !== null)
        formatted[key] = value?.[DBkeys.id] ?? value?.value ?? value;
    }
  }

  return formatted;
};
