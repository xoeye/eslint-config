module.exports = {
  rules: {
    // Enforce getter/setter pairs in objects
    // https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'off',

    // Enforce return statements in callbacks of array methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 'off',

    // Treat var statements as if they were block scoped
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'off',

    // Enforce that class methods utilize `this`
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'error',

    // Limit cyclomatic complexity
    // https://eslint.org/docs/rules/complexity
    'complexity': ['error', 11],

    // Require `return` statements to either always or never specifiy values
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'off',

    // Require curly brace for block statements
    // https://eslint.org/docs/rules/curly
    'curly': ['error', 'all'],

    // Require default case in switch statements
    // https://eslint.org/docs/rules/default-case
    'default-case': 'error',

    // Enforce newline before and after dot
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // Require dot notation
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': ['error', { allowKeywords: true }],

    // Require === and !==
    // https://eslint.org/docs/rules/eqeqeq
    'eqeqeq': ['error', 'always'],

    // Require for..in loops to include an if statement
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'off',

    // Enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': 'off',

    // Disallow use of alert
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'error',

    // Disallow use of caller/callee
    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // Disallow lexical declarations in case/default clauses
    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // Disallow regular expressions that look like division
    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // Disallow return before else
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': 'error',

    // Disallow empty functions
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': 'off',

    // Disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // Disallow null comparisons
    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'off',

    // Disallow `eval()`
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // Disallow extending of native objects
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // Disallow unnecessary function binding
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // Disallow unnecessary labels
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // Disallow case statement fallthrough
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // Disallow floating decimals
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // Disallow assignment to native objects or read-only global variables
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': 'off',

    // Disallow the type conversion with shorter notations
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': ['off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],

    // Disallow variable and function declarations in the global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // Disallow implied `eval()`
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // Disallow this keywords outside of classes or class-like objects
    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'error',

    // Disallow use of obsolete __iterator__ property
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // Disallow label statements
    // https://eslint.org/docs/rules/no-labels
    'no-labels': 'error',

    // Disallow unnecessary nested blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // Disallow creating functions with closures around variables in loop
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // Disallow the use of magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': ['error', {
      ignore: [-1, 0, 1, 60, 1000] ,
      ignoreArrayIndexes: false,
      enforceConst: true,
      detectObjects: false,
    }],

    // Disallow multiple spaces
    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'error',

    // Disallow multiline strings
    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',

    // Disallow new For side effects
    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // Disallow function constructor
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // Disallow octal literals
    // https://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // Disallow octal escape sequences in string literals
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // Disallow reassignment of function parameters
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': ['error', {
      props: true,
    }],

    // Disallow use of __proto__
    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // Disallow variable redeclaration
    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // Disallow certain object properties
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    }],

    // Disallow assignment in return statement
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error', 'always'],

    // Disallows unnecessary return await
    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': 'error',

    // Disallow script URLs
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // Disallow self assignment
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': ['error', { props: true }],

    // Disallow self compare
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // Disallow use of the comma opperator
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    // Restrict what can be thrown as an exception
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // Disallow unmodified conditions of loops
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // Disallow unused expressions
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': 'error',

    // Disallow unused labels
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // Disallow unnecessary .call() and .apply()
    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'error',

    // Disallow unnecessary catch clauses
    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 'error',

    // Disallow unnecessary concatenation of strings
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // Disallow unnecessary escape usage
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // Disallow redundant return statements
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // Disallow use of the void operator
    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // Disallow warning comments like TODO and FIXME
    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': 'off',

    // Disallow `with` statements
    // https://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // Suggest using named capture group in regular expression
    // https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': 'error',

    // Require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // Require radix parameter
    // https://eslint.org/docs/rules/radix
    'radix': 'off',

    // Disallow async functions which have no await expression
    // https://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // Enforce the use of `u` flag on `RegExp`
    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'off',

    // Require variable declarations to be at the top of their scope
    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'off',

    // Require Immediately Invoked Function Expressions (IIFEs) to be wrapped
    // https://eslint.org/docs/rules/wrap-iife
    'wrap-iife': ['error', 'inside'],

    // Require or disallow Yoda conditions
    // https://eslint.org/docs/rules/yoda
    'yoda': ['error', 'never']
  }
}
