module.exports = {
  root: true,
  extends: "@react-native/eslint-config",
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react",
    "simple-import-sort",
    "unused-imports",
    "jest",
  ],
  rules: {
    "import/no-extraneous-dependencies": "off",
    "import/no-dynamic-require": "off",
    quotes: [2, "double", {avoidEscape: true}],
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "react-hooks/exhaustive-deps": "off",
        "no-shadow": "off",
        "no-undef": "off",
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              ["^react", "^@?\\w"],
              ["^(@|components)(/.*|$)"],
              ["^\\u0000"],
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              ["^.+\\.?(css)$"],
            ],
          },
        ],
        "unused-imports/no-unused-imports": "error",
      },
    },
  ],
};
