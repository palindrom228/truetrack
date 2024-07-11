module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    "@babel/plugin-transform-flow-strip-types",
    ["@babel/plugin-proposal-class-properties", {loose: true}],
    ["@babel/plugin-transform-react-jsx", {pragmaFrag: "React.Fragment"}],
    ["@babel/plugin-proposal-decorators", {legacy: true}],
    ["@babel/plugin-transform-private-property-in-object", {loose: true}],
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env",
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "^~(.+)": "./src/\\1",
        },
        extensions: [
          ".ios.js",
          ".android.js",
          ".js",
          ".jsx",
          ".json",
          ".tsx",
          ".ts",
          ".native.js",
        ],
      },
    ],
  ],
};
