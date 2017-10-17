# eslint-config-mic

This is a config that contains the linting rules used by developers for Mic!

## Installation

1. Install the config itself.
```bash
# install the config itself
npm install --save-dev eslint-config-mic
```

2. If you haven't already, install `install-peerdeps` globally.
```bash
npm install -g install-peerdeps
```

3. Install the peer dependencies of `eslint-config-mic`.
```bash
install-peerdeps --dev eslint-config-mic
```

4. Create an `.eslintrc` file in the root directory of your project that looks like this:
```bash
// .eslintrc
{
  "extends": [
    'mic'
  ]
}
```

If you would like to use the flow version of the linter make your `.eslintrc` file look like this:
```bash
// .eslintrc
{
  "extends": [
    'mic/flow'
  ]
}
```

5. You can run the linter in your npm scripts like this:
```javascript
"scripts": {
  "lint": "eslint ."
}
```
