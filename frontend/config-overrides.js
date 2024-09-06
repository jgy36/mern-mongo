const webpack = require("webpack");

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify"),
    url: require.resolve("url"),
  });

  // Merge alias settings into resolve
  const alias = {
    "react/jsx-runtime.js": "react/jsx-runtime",
    "react/jsx-dev-runtime.js": "react/jsx-dev-runtime",
  };

  config.resolve = {
    ...config.resolve,
    fallback,
    alias: {
      ...config.resolve.alias, // Keep any existing aliases
      ...alias, // Add new aliases
    },
    extensions: [".js", ".jsx", ".json", ".mjs", ".cjs"], // Extensions for module resolution
  };

  // Add plugins for process and Buffer
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);

  // Add module rules for handling .mjs files
  config.module = config.module || {};
  config.module.rules = (config.module.rules || []).concat([
    {
      test: /\.m?js$/, // Match JavaScript and MJS files
      resolve: {
        fullySpecified: false, // Disable full specification for imports
      },
    },
  ]);

  return config;
};
