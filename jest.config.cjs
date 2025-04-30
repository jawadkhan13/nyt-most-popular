
module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    // CSS modules
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',

    // Vite alias for your service
    '^@nyt$': '<rootDir>/__mocks__/NYTDB.js',

    // Absolute src imports if any
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
