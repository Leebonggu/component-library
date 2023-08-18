import type { Config } from 'jest';
import 'ts-node/register';

const config: Config = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jsdom',
  verbose: true,
};

export default config;
