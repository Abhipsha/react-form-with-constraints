const { defaults } = require('jest-config');

// FIXME Fix for error:
// "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object."
// when writing "import App from './App'", Jest imports app.json instead of App.tsx
const moduleFileExtensions = defaults.moduleFileExtensions.filter(fileExtension => fileExtension !== 'json');

module.exports = {
  preset: 'jest-expo',

  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  // See https://github.com/facebook/jest/blob/v18.1.0/packages/jest-config/src/defaults.js#L53
  testRegex: '\\.test\\.tsx?$',

  moduleFileExtensions: [...moduleFileExtensions, 'ts', 'tsx']
};
