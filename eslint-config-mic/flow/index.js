module.exports = {
  extends: ["../index.js", "plugin:flowtype/recommended"],
  rules: {
    "flowtype/delimiter-dangle": [2, "always"],
    "flowtype/no-dupe-keys": 2,
    "flowtype/no-primitive-constructor-types": 2,
    "flowtype/object-type-delimiter": 2,
    "flowtype/semi": 2,
    "flowtype/type-id-match": 2,
    "import/no-duplicates": 2,
    "no-duplicate-imports": 0
  },
  plugins: ["babel", "flowtype", "import"]
};
