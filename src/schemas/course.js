import * as yup from "yup";

export const courseSchema = yup.object({
  title: yup.string().required().min(3).max(50),

  content: yup.string().required().min(10).max(1000),

  image: yup
    .mixed()
    .nullable()
    .test("fileType", "must be a valid image file", (value) => {
      if (!value) return true;
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/webp",
      ];

      return allowedTypes.includes(value?.file?.type);
    }),

  video: yup
    .mixed()
    .nullable()
    .test("video-file-or-url", "must be a valid video file", (value) => {
      if (!value) return true;

      const allowedVideoTypes = [
        "video/mp4",
        "video/webm",
        "video/ogg",
        "video/mov",
      ];

      return allowedVideoTypes.includes(value?.file?.type);
    })
    .test("video-size", "Video size must be less than 100 MB", (value) => {
      if (!value || typeof value === "string") return true;

      return value?.file?.size <= 100 * 1024 * 1024;
    }),
});
