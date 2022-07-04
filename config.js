import { baseEntries, entries } from "./entries.js";

export const config = {
  scriptName: 'start',
  webpackConfigPath: '../webpack.config.js',
  entries: {
    base: baseEntries,
    other: entries
  },
};
