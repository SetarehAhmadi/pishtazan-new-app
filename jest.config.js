const { pathsToModuleNameMapper } = require('ts-jest');
const nextJest = require('next/jest')

const tsConfig = require('./tsconfig.json')
const { compilerOptions } = JSON.parse(JSON.stringify(tsConfig));

const createJestConfig = nextJest({
    dir: './',
})

/** @type {import('jest').Config} */

const customJestConfig = {
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jest-environment-jsdom',
    roots: ['<rootDir>'],
    modulePaths: [compilerOptions.baseUrl], 
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
}

module.exports = createJestConfig(customJestConfig)

