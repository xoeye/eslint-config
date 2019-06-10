## @xoi/eslint-config-react-native

[![CircleCI](https://circleci.com/gh/xoeye/eslint-config.svg?style=svg)](https://circleci.com/gh/xoeye/eslint-config)
![Version](https://img.shields.io/npm/v/@xoi/eslint-config-react-native.svg)
![License](https://img.shields.io/npm/l/@xoi/eslint-config-react-native.svg)

An ESLint config for React Native apps

## Installation

This module is distributed via [`npm`](https://docs.npmjs.com/cli/npm) which is bundled with [`node`](https://nodejs.org/) and should be installed as one of your project's `devDependencies`:

```sh
yarn add -D @xoi/eslint-config-react-native
```

This package has peer dependencies. Please make sure you have those installed as well.

```sh
yarn add -D babel-eslint@^10.0.1 \
  eslint@^5.16.0 \
  eslint-config-airbnb@^17.1.0 \
  eslint-plugin-import@^2.17.3 \
  eslint-plugin-jsx-a11y@^6.2.1 \
  eslint-plugin-react@^7.13.0
```

## Usage

> .eslintrc.*

```js
module.exports = {
  extends: '@xoi/eslint-config-react-native',
  rules: { /* overrides and additional rules */ }  
}
```

## Contributing

TODO

