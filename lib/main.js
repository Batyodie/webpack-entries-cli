// import fs from 'fs/promises';
// import path from 'path';
// import chalk from 'chalk';
// import shell from 'shelljs';
import { Command } from 'commander';
// import camelCase from 'camelcase';
import { config } from '../config.js';

import { PROGRAM_BASE_INFO, BASE_COMMANDS } from './constants/constants.js';
import { initCommands } from './init/init-commands.js';
import { initBaseInfo } from './init/init-base-info.js';



// const packageJson = await fs.readFile(path.join('', './package.json'), 'utf8');

async function main() {
  const baseProgram = initBaseInfo(PROGRAM_BASE_INFO, new Command());
  const program = initCommands(BASE_COMMANDS, baseProgram, config.entries);

 await program.parseAsync();
}

main();
