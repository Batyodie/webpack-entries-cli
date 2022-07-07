export default function (baseCommands, program, entries = {}) {
  for (const baseCommand of baseCommands) {
    const currentCommand = program.command(baseCommand.name);

    currentCommand
      .description(baseCommand.description)
      .action((str, cliPotions) => baseCommand.action(str, cliPotions, entries));

    if (baseCommand.argument) {
      const [argName, argDesc] = baseCommand.argument;
      currentCommand.argument(argName, argDesc);
    }

    for (const [flags, desc] of baseCommand.options) {
      currentCommand.option(flags, desc);
    }
  }

  return program;
}
