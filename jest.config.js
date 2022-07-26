/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: './__tests__',
  setupFilesAfterEnv: ['../jest-setup.ts']
};