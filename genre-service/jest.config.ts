export default {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  testRegex: "\\.test\\.ts$",
  testPathIgnorePatterns: ["/coverage/", "jest.config.ts"],
  coverageReporters: ['lcov', 'text'],
  // reporters: [
  //   "default",
  //   [
  //     "jest-trx-results-processor",
  //     {
  //       "outputFile": "./tests/jestTestResults.trx"
  //     }
  //   ]
  // ]
}
