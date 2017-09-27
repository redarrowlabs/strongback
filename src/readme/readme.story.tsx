import * as React from 'react';
import { storiesOf } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

storiesOf('Readme', module)
    .add('readme', () => {
        /*Readme! */

        const tooltipCustomName = `
             /* set a custom name */
            [class*="hint-"][class*="-t-tooltip_custom_type_name"][class*="hint-bottom"]:before{
                border-bottom-color: custom_background_color;
            }
            [class*="hint-"][class*="-t-tooltip_custom_type_name"][class*="hint-top"]:before{
                border-top-color: custom_background_color;
            }
            [class*="hint-"][class*="-t-tooltip_custom_type_name"][class*="hint-right"]:before{
                border-right-color: custom_background_color;
            }
            [class*="hint-"][class*="-t-tooltip_custom_type_name"][class*="hint-left"]:before{
                border-left-color: custom_background_color;
            } 
            [class*="hint-"][class*="-t-tooltip_custom_type_name"]:after {
                background: custom_background_color;
                color: custom_text_color;
            }
        `;

        const iconCustomTypeName = `
            [data-hint] .icon_custom_type_name {
                color: #fff;
                background: #555;
                padding: 1px 6px;
                border-radius: 50%;
                font-size: .7rem;
            }
        `;

        return <div style={{ padding: '30px'}}>
            <h1>Read me!</h1>
            <p>This is a set of instructions and customization properties</p>
            <div>
                <h3>Tooltip Custom color</h3>
                <p>Add this css to your brand styles. Customize your name and then add the prop tooltipCustomTypeName='tooltip_custom_type_name' to your tooltip component.</p>
                <SyntaxHighlighter language='css'>{tooltipCustomName}</SyntaxHighlighter>
            </div>
            <hr />
            <div>
                <h3>Info Icon custom color/styles</h3>
                <p>Add this css to your brand styles. Customize your name and then add the prop iconCustomTypeName='icon_custom_type_name' to your icon component.</p>
                <SyntaxHighlighter language='css'>{iconCustomTypeName}</SyntaxHighlighter>
            </div>
        </div>;
    });
