const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const normalizedBasePath = basePath && basePath !== "/" ? basePath : "";

export default {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: normalizedBasePath,
  assetPrefix: normalizedBasePath ? `${normalizedBasePath}/` : ""
};
