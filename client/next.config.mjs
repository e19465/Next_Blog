/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "myfirstbucket-e19465.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "next14-express-blog-bucket.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
