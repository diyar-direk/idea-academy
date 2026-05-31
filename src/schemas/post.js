import * as yup from "yup";

export const postsSchema = yup.object({
  title: yup.string().required().min(3).max(50),

  content: yup.string().required().min(10).max(500),

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
    .test("video-file-or-url", "must be a valid video file or URL", (value) => {
      if (!value) return true;

      if (typeof value === "string") {
        return yup.string().url().isValidSync(value);
      }

      const allowedVideoTypes = [
        "video/mp4",
        "video/webm",
        "video/ogg",
        "video/mov",
      ];

      return allowedVideoTypes.includes(value?.file?.type);
    }),
});

export const updatePostSchema = yup.object({
  title: yup.string().required().min(3).max(50),

  content: yup.string().required().min(10).max(500),

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

  video: yup.mixed().nullable(),
});
