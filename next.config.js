/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    output: "export",
    assetPrefix: process.env.NODE_ENV === "production" ? "https://cjkywe07.github.io/FRADOTtest" : ""
};

module.exports = nextConfig;
