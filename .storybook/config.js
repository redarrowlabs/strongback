console.log('configuring storybook');
import { configure } from '@kadira/storybook';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-select/dist/react-select.css';
import 'react-widgets/dist/css/react-widgets.css';
import '../src/app.css';
import '../src/styles.css';
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
