// force timezone to UTC to allow tests to work regardless of local timezone
// generally used by snapshots, but can affect specific tests
process.env.TZ = 'UTC';

const { grafanaESModules, nodeModulesToTransform } = require('./.config/jest/utils');
const baseConfig = require('./.config/jest.config');

module.exports = {
  // Jest configuration provided by Grafana scaffolding
  ...baseConfig,
  // Some ESM-only dependencies (e.g. d3-color >= 3.1.1) point their entry at a `.mjs` file,
  // which the scaffolded transform pattern does not match. Reuse the same swc transform for it.
  transform: {
    '^.+\\.m?(t|j)sx?$': baseConfig.transform['^.+\\.(t|j)sx?$'],
  },
  // @grafana/plugin-ui ships ESM and must be transformed alongside the known grafana modules.
  transformIgnorePatterns: [nodeModulesToTransform([...grafanaESModules, '@grafana/plugin-ui'])],
};
