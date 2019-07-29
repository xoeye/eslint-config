/**
 * @description
 *   JavaScript linter rules absent any framework
 */
module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/flowtype',
    './rules/import',
    './rules/strict',
    './rules/style',
    './rules/variables'
  ].map(require.resolve),
  rules: {}
}

