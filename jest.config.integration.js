// require('dotenv').config({
//   path: '.env.test'
// });
require('dotenv').config();

module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(test).+(ts|js)'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};