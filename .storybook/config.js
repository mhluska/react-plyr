import { configure, setAddon } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

// setDefaults({
//   header: false, // Toggles display of header with component name and description
//   inline: true, // Displays info inline vs click button to view
//   source: true, // Displays the source of story Component
//   propTables: [/* Components used in story */], // displays Prop Tables with this components
//   propTablesExclude: [], // Exclude Components from being shown in Prop Tables section
//   styles: {}, // Overrides styles of addon
//   marksyConf: {}, // Overrides components used to display markdown. Warning! This option's name will be likely deprecated in favor to "components" with the same API in 3.3 release. Follow this PR #1501 for details
//   maxPropsIntoLine: 1, // Max props to display per line in source code
//   maxPropObjectKeys: 10, // Displays the first 10 characters of the prop name
//   maxPropArrayLength: 10, // Displays the first 10 items in the default prop array
//   maxPropStringLength: 100, // Displays the first 100 characters in the default prop string
// });

setOptions({
  name: 'React Plyr',
  url: 'https://github.com/xDae/react-plyr#readme',
  // goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  // showSearchBox: false,
  downPanelInRight: true
});

configure(() => require('./stories'), module);
