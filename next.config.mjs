/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Redirects any traffic from the old /projects/ slug to the new /work/ slug
        source: "/projects/:slug*",
        destination: "/work/:slug*",
        permanent: true, // Triggers a 301 redirect (Crucial for SEO link juice)
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
