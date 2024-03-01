/** @type {import('next').NextConfig} */
const nextConfig = {
images:{
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "**",
        protocol: "http",
      }
    ],
},

};

export default nextConfig;
