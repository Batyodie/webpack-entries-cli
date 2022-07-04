const defaultEntry = {
  defaultFooEntry: 'bar'
};

export default (env, args, options) => {
  const {entry} = options;

  return {
    mode: 'development',
    context: '',
    entry: entry ? entry : defaultEntry,
    output: {},
    module: {},
    resolve: {},
    plugins: [],
  };
};
