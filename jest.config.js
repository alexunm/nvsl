module.exports = {
  moduleDirectories: ['node_modules', 'utils', __dirname],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
}
