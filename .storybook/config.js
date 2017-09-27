console.log('configuring storybook');
import { configure } from '@storybook/react';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';

import 'tachyons/css/tachyons.css';

// Import these in a brand package to make it look right!
import 'react-select/dist/react-select.css';
import 'react-widgets/dist/css/react-widgets.css';
import './app.css';
import '../src/tooltip/tooltipCustomTypeName.css';
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
