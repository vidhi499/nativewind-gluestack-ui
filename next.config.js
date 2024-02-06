/** @type {import('next').NextConfig} */
const { withGluestackUI } = require("@gluestack/ui-next-adapter");
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "nativewind",
    "react-native-css-interop",
    "react-native",
    "@gluestack-ui/nativewind-utils",
  ],
};

module.exports = withGluestackUI(nextConfig);
