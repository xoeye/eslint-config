/**
 * Accessibility rules for React Native
 * https://github.com/FormidableLabs/eslint-plugin-react-native-a11y
 */
module.exports = {
  plugins: ['react-native-a11y'],
  rules: {
    // Require `accessibilityLabel` prop when `accessible` prop is `true`
    // https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/master/docs/rules/accessibility-label.md
    'react-native-a11y/accessibility-label': 'error',

    // Require `<Touchable*>` components to have all a11y props
    // https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/master/docs/rules/has-accessibility-props.md
    'react-native-a11y/has-accessibility-props': 'error',

    // Require valid a11y role for a11y-able elements
    // https://github.com/FormidableLabs/eslint-pluginareact-native-a11y/blob/master/docs/rules/has-valid-accessibility-role.md
    'react-native-a11y/has-valid-accessibility-role': 'error',

    // Require accessibility states for a11y-able elements
    // https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/master/docs/rules/has-valid-accessibility-states.md
    'react-native-a11y/has-valid-accessibility-states': 'error',

    // Require accessibility component type
    // https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/master/docs/rules/has-valid-accessibility-component-type.md
    'react-native-a11y/has-valid-accessibility-component-type': 'error',

    // Require `accessibilityLiveRegion` prop for a11y-able dynamic elements
    // https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/master/docs/rules/has-valid-accessibility-live-region.md
    'react-native-a11y/has-valid-accessibility-live-region': 'error',

    // Require overlapping views to have `importantForAccessibility` prop
    // https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/master/docs/rules/has-valid-important-for-accessibility.md
    'react-native-a11y/has-valid-important-for-accessibility': 'error',

    // Prevent usage of `<Touchable*/>` without a11y elements
    // https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/master/docs/rules/no-nested-touchables.md
    'react-native-a11y/no-nested-touchables': 'error'
  }
}
