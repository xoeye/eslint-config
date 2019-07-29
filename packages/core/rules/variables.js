/**
 * These rules relate to variable declarations
 * https://eslint.org/docs/rules/#variables
 */
module.exports = {
  rules: {
    // Require or disallow initialization in variable declarations
    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': '',

    // Disallow deleting variables
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    //  Disallow labels that are variable names
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // Disallow specific global variables
    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': 'off',

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'error',

    // Disallow undeclared variables
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'error',

    // Disallow initializing to undefined
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // Disallow use of `undefined` variable
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'off',

    // Disallow unused variables
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // Disallow early use
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': ['error', { functions: true, classes: false, variables: false }]
  }
}
