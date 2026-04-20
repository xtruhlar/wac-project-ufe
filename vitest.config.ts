import { defineVitestConfig } from '@stencil/vitest/config';

export default defineVitestConfig({
  stencilConfig: './stencil.config.ts',
  test: {
    projects: [
      // Stencil unit tests always run.
      {
        test: {
          name: 'unit',
          include: ['src/**/*.unit.test.{ts,tsx}'],
          environment: 'stencil',
        },
      }
    ]
  }
});
