/**
 * Rules for Flow, the static type-checker
 * https://github.com/gajus/eslint-plugin-flowtype
 */
module.exports = {
  parser: 'babel-eslint',
  plugins: ['flowtype'],
  rules: {
    // #region Potential Errors

    // Define types to avoid 'no-undef' errors
    // https://github.com/gajus/eslint-plugin-flowtype#define-flow-type
    'flowtype/define-flow-type': 'error',

    // No duplicate keys within a type
    // https://github.com/gajus/eslint-plugin-flowtype#no-dupe-keys
    'flowtype/no-dupe-keys': 'error',

    // Catches instances of setting a type to a primitive constructor
    // since Flow treats classes as a type
    // bad: type x = Number
    // good: type x = number
    // https://github.com/gajus/eslint-plugin-flowtype#no-primitive-constructor-types
    'flowtype/no-primitive-constructor-types': 'error',

    // #endregion Potential Errors

    // #region Best Practices

    // Existential types are deprecated
    // https://github.com/facebook/flow/issues/6308
    'flowtype/no-existential-type': 'error',

    // Warns against weak type annotations any, Object and Function.
    // These types can cause flow to silently skip over portions of your code, which would have otherwise caused type errors.
    // https://github.com/gajus/eslint-plugin-flowtype#no-weak-types
    'flowtype/no-weak-types': 'error',

    // Make $FlowFixMe comments visible to encourage
    // them to be fixed over time.
    // https://github.com/gajus/eslint-plugin-flowtype#no-flow-fix-me-comments
    'flowtype/no-flow-fix-me-comments': 'warn',

    // #endregion Best Practices

    // #region Style

    // Requires `// @flow` to use types
    // https://github.com/gajus/eslint-plugin-flowtype#no-types-missing-file-annotation
    'flowtype/no-types-missing-file-annotation': 'error',

    // Requires space after `:` when declaring type
    // bad: (foo :string)
    // good: (foo: string)
    // https://github.com/gajus/eslint-plugin-flowtype#space-after-type-colon
    'flowtype/space-after-type-colon': ['error', 'always'],

    // Requires spacing before and after `|` and `&` operators
    // https://github.com/gajus/eslint-plugin-flowtype#union-intersection-spacing
    'flowtype/union-intersection-spacing': ['error', 'always'],

    // Requires no space between generic type and brackets
    // bad: Array <string>
    // good: Array<string>
    // https://github.com/gajus/eslint-plugin-flowtype#space-before-generic-bracket
    'flowtype/space-before-generic-bracket': ['error', 'never'],

    // Requires type imports to use identifier import style
    // bad: import type { Foo } from '...'
    // good: import { type Foo } from '...
    // https://github.com/gajus/eslint-plugin-flowtype#type-import-style
    'flowtype/type-import-style': ['error', 'identifier']

    // #endregion Style
  }
}
