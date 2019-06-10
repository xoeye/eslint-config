/**
 * @description
 *   JavaScript linter rules absent any framework
 */
module.exports = {
  extends: [
    './rules/best-practices',
    './rules/flowtype',
    './rules/import',
    './rules/style'
  ].map(require.resolve),
  rules: {}
}

