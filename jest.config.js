/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  setupFilesAfterEnv: ["jest-styled-components"],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts, tsx}',
    '!<rootDir>/src/**/index.ts', // component export file
    '!<rootDir>/src/**/theme.ts' // project theme definition
  ]
};