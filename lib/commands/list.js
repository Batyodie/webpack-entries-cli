export default function(str, options, entries) {
  const keysEntries = Object.keys(entries);

  if (!keysEntries.length) return new Error('entries is empty');
  if (!entries.base && !entries.other) return new Error('base entries or other entries is undefined');

  const {base, other} = entries;


  console.log(base, other);
}
