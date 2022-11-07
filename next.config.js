const withReactSvg = require("next-react-svg");
const path = require("path");
{
  import("next").NextConfig;
}

const nextConfig = withReactSvg({
  include: path.resolve(__dirname, "./assets/icons"),
  webpack(config, options) {
    return config;
  },
});
module.exports = nextConfig;
