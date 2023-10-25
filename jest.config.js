/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    ".+\\.(webp|svg)$": "<rootDir>/src/utils/mockImage.ts"
  },
  clearMocks: true,
  setupFilesAfterEnv: ["jest-styled-components"],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.index\\.ts$'
  ]
};