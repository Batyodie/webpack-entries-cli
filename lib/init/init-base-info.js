export function initBaseInfo({ name, description, version }, program) {
  return program
  .name(name)
  .description(description)
  .version(version);
}
