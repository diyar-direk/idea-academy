const videoServerSrc = (src) => {
  if (!src) return "";

  const isExternal = /^https?:\/\//i.test(src);

  if (!isExternal) {
    return `${import.meta.env.VITE_MEDIA_URL}${src}`;
  }

  try {
    const url = new URL(src);
    const hostname = url.hostname;

    const isYoutube =
      hostname.includes("youtube.com") || hostname.includes("youtu.be");

    if (isYoutube) {
      let videoId = "";

      if (url.pathname === "/watch") {
        videoId = url.searchParams.get("v");
      } else if (hostname.includes("youtu.be")) {
        videoId = url.pathname.split("/")[1];
      } else if (url.pathname.startsWith("/live/")) {
        videoId = url.pathname.split("/")[2];
      }

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    return src;
  } catch {
    return src;
  }
};

export default videoServerSrc;
