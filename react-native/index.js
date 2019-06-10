/**
 * @description
 *   React Native ESLint config
 */
module.exports = {
  extends: [
    '@xoi/eslint-config-react',
    './rules/react-native',
    './rules/a11y'
  ].map(require.resolve),
  rules: {}
}

