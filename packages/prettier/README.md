## @xoi/prettier-config

[![CircleCI](https://circleci.com/gh/xoeye/eslint-config.svg?style=svg)](https://circleci.com/gh/xoeye/eslint-config)
![Version](https://img.shields.io/npm/v/@xoi/prettier-config.svg)
![License](https://img.shields.io/npm/l/@xoi/prettier-config.svg)

A minimal [Prettier](https://prettier.io) configuration for JavaScript projects

## Installation

This module is distributed via [`npm`](https://docs.npmjs.com/cli/npm) which is bundled with [`node`](https://nodejs.org/) and should be installed as one of your project's `devDependencies`:

```sh
yarn add -D @xoi/prettier-config
```

This package has peer dependencies. Please make sure you have those installed as well.

```sh
yarn add -D eslint@^6.1.0 \
  prettier@^1.18.2
```

## Usage

> .eslintrc.*

```js
module.exports = {
  extends: [
    'other-eslint-configs',
    // Add @xoi/prettier-config as the last
    // item in the array so it gets the chance to
    // override other configs.
    '@xoi/prettier-config',
  ],
}
```

> .prettierrc.js

```js
module.exports = require('@xoi/prettier-config/prettier.config')
```

## Editor Integration

Prettier can be integrated with various editors. See the [Editor Integration](https://prettier.io/docs/en/editors.html) page in the Prettier documentation for details.

## Contributing

Open an [issue](https://github.com/xoeye/eslint-config/issues/new) or create a [pull request](https://github.com/xoeye/eslint-config/pulls)
