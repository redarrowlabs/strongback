const storybook = require('@kadira/storybook');

function loadStories() {
  require('../packages/sb-button/button.story.tsx');
  // require as many stories as you need.
}

storybook.configure(loadStories, module);