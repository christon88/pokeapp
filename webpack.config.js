const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { EsbuildPlugin } = require("esbuild-loader");
const postcssNormalize = require("postcss-normalize");
const publicPath = "/";
const srcPath = path.resolve(__dirname, "src");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = function (_, { mode }) {
  const isProduction = mode === "production";

  return {
    mode,
    devtool: isProduction ? "source-map" : "cheap-module-source-map",
    entry: "./src/index.tsx",
    stats: "minimal",
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "static/js/[name].[contenthash:8].js",
      publicPath,
      globalObject: "this",
    },
    devServer: {
      historyApiFallback: {
        index: "/",
      },
      hot: false,
      port: 3000,
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new EsbuildPlugin({
          target: "es2015",
          css: true,
        }),
      ],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/i,
          type: "asset/resource",
        },

        {
          test: /\.(ts)$/,
          use: [
            {
              loader: "esbuild-loader",
              options: {
                loader: "ts",
                target: "es2015",
              },
            },
          ],
        },
        {
          test: /\.(tsx)$/,
          use: [
            {
              loader: "esbuild-loader",
              options: {
                loader: "tsx",
                target: "es2015",
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          exclude: /\.module\.scss$/,
          sideEffects: true,
          use: getStyleLoaders({ sourceMap: true }).concat(sassLoaders),
        },
        {
          test: /\.module\.scss$/,
          sideEffects: true,
          use: getStyleLoaders({
            sourceMap: true,
            modules: {
              localIdentName: "[name]__[local]--[hash:base64:5]",
            },
          }).concat(sassLoaders),
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "static/css/[name].[contenthash:8].css",
        chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
      }),
      new ForkTsCheckerWebpackPlugin({}),
    ],
    watchOptions: {
      ignored: ["**/node_modules", "**/types"],
    },
  };
};

const getStyleLoaders = (cssOptions) => [
  { loader: MiniCssExtractPlugin.loader, options: { esModule: false } },
  {
    loader: require.resolve("css-loader"),
    options: cssOptions,
  },
  {
    loader: require.resolve("postcss-loader"),
    options: {
      postcssOptions: {
        plugins: [
          "postcss-flexbugs-fixes",
          [
            "postcss-preset-env",
            { autoprefixer: { flexbox: "no-2009" }, stage: 3 },
          ],
          postcssNormalize(),
        ],
      },
      sourceMap: true,
    },
  },
];

const sassLoaders = [
  {
    loader: require.resolve("resolve-url-loader"),
    options: { sourceMap: true, root: srcPath },
  },
  {
    loader: require.resolve("sass-loader"),
    options: { sourceMap: true },
  },
];
