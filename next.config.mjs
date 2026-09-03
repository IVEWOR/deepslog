/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/:slug*",
        destination: "/work/:slug*",
        permanent: true,
      },
      {
        source: "/work/womencann",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/work/solutions-by-it-works",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/work/classic-car-dealer",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/#work",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
