// https://kulshekhar.github.io/ts-jest/user/config/#jest-config-with-helper
// const { pathsToModuleNameMapper } = require('ts-jest/utils');
const {compilerOptions} = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/test/jest-setup.ts'],
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths , { prefix: '<rootDir>/src/' }  )
};
