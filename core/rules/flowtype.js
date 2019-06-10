module.exports = {
  parser: 'babel-eslint',
  plugins: ['flowtype'],
  rules: {
    // #region Potential Errors

    // Define types to avoid 'no-undef' errors
    'flowtype/define-flow-type': 'warn',

    // No duplicate keys within a type
    'flowtype/no-dupe-keys': 'error',

    // Catches instances of setting a type to a primitive constructor
    // since Flow treats classes as a type
    // bad: type x = Number 
    // good: type x = number
    'flowtype/no-primitive-constructor-types': 'error',

    // #endregion Potential Errors

    // #region Best Practices

    // existential types are deprecated
    // https://github.com/facebook/flow/issues/6308
    'flowtype/no-existential-type': 'error',

    // Show a warning for any|Object|Function types to encourage
    // more useful types
    'flowtype/no-weak-types': 'warn',
    // Make $FlowFixMe comments visible to encourage
    // them to be fixed over time.
    'flowtype/no-flow-fix-me-comments': 'warn',

    // #endregion Best Practices

    // #region Style

    // Requires // @flow to use types
    'flowtype/no-types-missing-file-annotation': 'error',
    // bad: (foo :string) 
    // good: (foo: string)
    'flowtype/space-after-type-colon': ['error', 'always'],
    // bad: Array <string> 
    // good: Array<string>
    'flowtype/space-before-generic-bracket': ['error', 'never']

    // #endregion Style
  }
}
