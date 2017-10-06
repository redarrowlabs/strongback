console.log('configuring storybook');
import { configure } from '@storybook/react';

// Styles that make this storybook look right //
import './app.css';
import './styles.css';

// Third party styles //
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'tachyons/css/tachyons.css';

import 'react-select/dist/react-select.css';

// Import these in a brand package to make it work right!
import '../bin/styles.css';

const requireContext = require.context('../src', true, /.story.tsx$/);

const {useDefaultImplementations} = require('../src/defaults');
useDefaultImplementations();

function loadStories() {
    requireContext.keys().forEach(filename => {
        console.log('requiring ' + filename)
        return requireContext(filename);
    });
}

configure(loadStories, module);
