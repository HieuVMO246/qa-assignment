module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/**/*.spec.ts'],
  reporters: [
    'default', // Use the default reporter
    ['jest-html-reporters', {
      publicPath: './reports', // Output directory for the HTML report
      filename: 'test-report.html', // Name of the HTML report file
      expand: true, // Create subdirectories for suites
    }],
  ],
};