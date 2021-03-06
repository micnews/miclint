module.exports = {
  extends: "airbnb",
  plugins: ["babel"],
  rules: {
    "generator-star-spacing": 0,
    "jsx-quotes": [2, "prefer-single"],
    "no-underscore-dangle": [0],

    "babel/generator-star-spacing": [2, { before: false, after: true }],

    "import/no-commonjs": 2,

    "jsx-a11y/label-has-for": [0],

    "react/display-name": [2, { ignoreTranspilerName: false }],
    "react/jsx-boolean-value": [2, "always"],
    "react/jsx-filename-extension": [0],
    "react/jsx-key": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/no-direct-mutation-state": 2,
    "react/require-extension": [0]
  },
  parser: "babel-eslint",
  env: {
    browser: true
  }
};
