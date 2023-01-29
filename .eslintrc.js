module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier", "plugin:@html-eslint/recommended"],
  overrides: [
    {
      files: ["*.html"],
      parser: "@html-eslint/parser",
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "prettier/prettier": "error",
    "@html-eslint/no-duplicate-attrs": "error",
    "html/report-bad-indent": ["error", 1],
    "@html-eslint/no-obsolete-tags": "error",
    "@html-eslint/no-duplicate-id": "error",
    "@html-eslint/quotes": ["error", "double"],
    "@html-eslint/require-closing-tags": ["never"],
  },
  plugins: ["html", "prettier", "@html-eslint"],
  settings: {},
}
