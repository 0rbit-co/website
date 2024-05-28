/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/NTuWJXvJw2",
        permanent: true, // This indicates a 301 permanent redirect. Set to false for a 307 temporary redirect.
      },
      // You can add more redirects here
    ];
  },
};

export default nextConfig;
