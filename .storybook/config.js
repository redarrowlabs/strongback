const storybook = require('@kadira/storybook');

function loadStories() {
  require('../src/button/button.story.tsx');
  require('../src/modal/modal.story.tsx');
  require('../src/code/code.story.tsx');
  // require as many stories as you need.
}

storybook.configure(loadStories, module);