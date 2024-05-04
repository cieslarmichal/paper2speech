import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    passWithNoTests: false,
    globals: false,
    environment: 'node',
  },
});
