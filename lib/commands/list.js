export default function (str, options, entries) {
  const keysEntries = Object.keys(entries);

  if (!keysEntries.length) throw new Error('entries is empty');
  if (!entries.base && !entries.other) throw new Error('base entries or other entries is undefined');

  const { base, other } = entries;
  const baseCollection = Object.entries(base).map((b) => [...b, 'base']);
  const otherCollection = Object.entries(other).map((o) => [...o, 'other']);

  // eslint-disable-next-line no-console
  return console.table(
    [...baseCollection, ...otherCollection].map(([key, value, type]) => ({
      name: key,
      type,
      entryPoints: value,
    })),
  );
}
