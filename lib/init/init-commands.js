export function initCommands(baseCommands, program, entries = {}) {
  for (const { name, description, argument, action, options } of baseCommands) {
    const currentCommand = program.command(name);

    currentCommand
      .description(description)
      .action((str, options) => action(str, options, entries));

    if (argument) {
      const [argName, argDesc] = argument;
      currentCommand.argument(argName, argDesc);
    }

    for (const [flags, desc] of options) {
      currentCommand.option(flags, desc);
    }
  }

  return program;
}
