/**
 * These rules relate to strict mode directives
 * https://eslint.org/docs/rules/#strict-mode
 */
module.exports = {
  rules: {
    // Babel inserts `'use strict';` automagically ✨
    strict: ['error', 'never']
  }
}
