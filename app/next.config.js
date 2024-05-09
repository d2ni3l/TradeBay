/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },

  webpack: (config) => {
    config.externals = [...config.externals, "bcrypt"];
    return config;
  },
};
