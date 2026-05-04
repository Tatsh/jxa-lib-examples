import { createDefaultPreset } from 'ts-jest';

export default {
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transformIgnorePatterns: ['node_modules/(?!ramda)/es/.*'],
  transform: {
    '^.+\\.js?$': ['ts-jest', {}],
    ...createDefaultPreset().transform,
  },
};
