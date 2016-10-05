const storybook = require('@kadira/storybook');

require('react-s-alert/dist/s-alert-default.css');
require('react-s-alert/dist/s-alert-css-effects/flip.css');
require('react-select/dist/react-select.css');

function loadStories() {
  require('../src/button/button.story.tsx');
  require('../src/modal/modal.story.tsx');
  require('../src/code/code.story.tsx');
  require('../src/toast/toast.story.tsx');
  require('../src/form/form.story.tsx');
  // require as many stories as you need.
}

storybook.configure(loadStories, module);