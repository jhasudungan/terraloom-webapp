import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['localhost'], // allow loading images from Strapi
  },
};

export default withFlowbiteReact(nextConfig);