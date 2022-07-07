import page from '../commands/page.js';
import pages from '../commands/pages.js';
import list from '../commands/list.js';

export const BASE_COMMANDS = [
  {
    name: 'page',
    description:
      'Turn page to start webpack dev server to the page entry point',
    argument: ['<entry name>', 'The entry point of your application e.g main'],
    options: [['--no-base', 'Do not add base entry point(s)']],
    action: page,
  },

  {
    name: 'pages',
    description:
      'Turn pages to start webpack dev server to the page entry point(s)',
    argument: [
      '<entries-names>',
      'The entry point(s) names of your application e.g (contacts,favorite,com-filter)',
    ],
    options: [
      ['-nb, --no-base', 'Do not add base entry point(s)'],
      ['-a, --all', 'Add all entry point(s)'],
    ],
    action: pages,
  },

  {
    name: 'list',
    description: 'List to entry point(s)',
    options: [
      ['-nb, --no-base', 'Entry point(s) list without base entries'],
    ],
    action: list,
  },
];

export const PROGRAM_BASE_INFO = {
  name: 'a101-pages',
  description: 'CLI to dev webpack entries a101',
  version: '0.0.1',
};
