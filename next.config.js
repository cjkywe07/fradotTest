/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    output: "export",
    assetPrefix: process.env.NODE_ENV === "production" ? "https://cjkywe07.github.io/fradotTest" : ""
};

module.exports = nextConfig;
