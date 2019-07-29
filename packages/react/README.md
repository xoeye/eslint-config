## @xoi/eslint-config-react

[![CircleCI](https://circleci.com/gh/xoeye/eslint-config.svg?style=svg)](https://circleci.com/gh/xoeye/eslint-config)
![Version](https://img.shields.io/npm/v/@xoi/eslint-config-react.svg)
![License](https://img.shields.io/npm/l/@xoi/eslint-config-react.svg)

An ESLint config for React apps

## Installation

This module is distributed via [`npm`](https://docs.npmjs.com/cli/npm) which is bundled with [`node`](https://nodejs.org/) and should be installed as one of your project's `devDependencies`:

```sh
yarn add -D @xoi/eslint-config-react
```

This package has peer dependencies. Please make sure you have those installed as well.

```sh
yarn add -D eslint@^6.1.0
```

## Usage

> .eslintrc.*

```js
module.exports = {
  extends: '@xoi/eslint-config-react',
  rules: { /* overrides and additional rules */ }
}
```

## Editor Integration

ESLint can be integrated with various editors. See the [Integrations](https://eslint.org/docs/user-guide/integrations) page in the ESLint documentation for details

## Contributing

Open an [issue](https://github.com/xoeye/eslint-config/issues/new) or create a [pull request](https://github.com/xoeye/eslint-config/pulls)
