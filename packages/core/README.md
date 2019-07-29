## @xoi/eslint-config-core

[![CircleCI](https://circleci.com/gh/xoeye/eslint-config.svg?style=svg)](https://circleci.com/gh/xoeye/eslint-config)
![Version](https://img.shields.io/npm/v/@xoi/eslint-config-core.svg)
![License](https://img.shields.io/npm/l/@xoi/eslint-config-core.svg)

An opinionated, framework-agnostic ESLint config

Inspired by [Airbnb's JavaScript style guide](https://github.com/airbnb/javascript) and [Formidable Labs's ESLint config](https://github.com/FormidableLabs/eslint-config-formidable).

## Installation

This module is distributed via [`npm`](https://docs.npmjs.com/cli/npm) which is bundled with [`node`](https://nodejs.org/) and should be installed as one of your project's `devDependencies`:

```sh
yarn add -D @xoi/eslint-config-core
```

This package has peer dependencies. Please make sure you have those installed as well.

```sh
yarn add -D babel-eslint@^10.0.2 \
  eslint@^6.1.0 \
  eslint-plugin-import@^2.18.2 \
```

## Usage

> .eslintrc.*

```js
module.exports = {
  extends: '@xoi/eslint-config-core',
  rules: { /* overrides and additional rules */ }
}
```

## Contributing

TODO
