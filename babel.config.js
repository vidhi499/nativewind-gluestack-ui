const path = require("path");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["next/babel", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      "@babel/plugin-transform-modules-commonjs",
      "react-native-reanimated/plugin",

      [
        "module-resolver",
        {
          alias: {
            "@gluestack-ui/button": path.resolve(
              __dirname,
              "./node_modules/@gluestack-ui/button/src"
            ),
          },
        },
      ],
    ],
  };
};
