import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ["192.168.10.111"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*.supabase.co"
            },
            {
                protocol: "https",
                hostname: "images.ranobedb.org"
            },
            {
                protocol: "https",
                hostname: "s4.anilist.co"
            }
        ]
    }
};
export default nextConfig;
