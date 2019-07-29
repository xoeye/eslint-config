/**
 * Rules for React Native
 * https://github.com/Intellicode/eslint-plugin-react-native
 */
module.exports = {
  plugins: [
    '@xoi/eslint-config-react',
    'react-native'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    // Allow all browser-like globals
    'react-native/react-native': true
  },
  rules: {
    // Detect unused `StyleSheet` rules
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-unused-styles.md
    'react-native/no-unused-styles': 'error',

    // Require style definitions to be sorted alphabetically
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/sort-styles.md
    'react-native/sort-styles': 'off',

    // Enforce using platform-specific filenames when necessary
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/split-platform-components.md
    'react-native/split-platform-components': 'off',

    // Disallow inline styles in JSX
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-inline-styles.md
    'react-native/no-inline-styles': 'error',

    // Disallow `StyleSheet` rules with color literals instead of variables
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-color-literals.md
    'react-native/no-color-literals': 'error',

    // Disallow text outside of `<Text>` component
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-raw-text.md
    'react-native/no-raw-text': 'error'
  }
}
