import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color } from '@storybook/addon-knobs';
import { padding } from '../deco';

storiesOf('Hello', module)
    .addDecorator(withKnobs)
    .addDecorator(padding)
    .add('Goals', () => {
        return <div>
            <h1>🚀 Strongback - React</h1>
            <h2>🏆 Goals</h2>
            <h3>1. Don't Make Me Think</h3>
            <p>
                The golden rule! If it's not obvious how to use, it should be rethought. This applies to both the end user interacting with the pattern, as well as the developer implementing it.
            </p>
            <h3>2. Opinionated</h3>
            <p>
                A design pattern without opinions is no pattern at all. At the same time, stay agnostic to the actual design (colors, shapes, sizes).
            </p>
            <h3>3. Toolkit</h3>
            <p>
                Help developers and designers build libraries that both match the RAL patterns, and achieve the brand design.
            </p>
            <h3>4. Developer Experience</h3>
            <p>
                Not every developer is a front-end whiz. Their time is valuable, so don't waste it by being too clever! Build things as simple as possible (but no simpler). See Goal #1.
            </p>
        </div>;
    })
    .add('Storybook', () => {
        const colors = {
            backgroundColor: color('Background Color', 'rebeccapurple'),
            color: color('Text Color', 'white')
        };

        return <div>
            <h1>🚀 Strongback - React</h1>
            <h2>📖 About this Storybook</h2>
            <p>
                This storybook shows how a developer might create their own library by picking brand defaults through Strongback -- it's not advisable to use Strongback directly in an application, because each component has many configurable properties!
            </p>
            <p>
                Instead, a brand library would expose more domain specific usages of Strongback. For example, a BrandButton that does not ask for any classes, because it's already colored correctly.
            </p>
            <p>
                You can play with the customizations by using the Knobs pane. Try changing <span className='pa1' style={colors}>this color!</span>
            </p>

        </div>
    })
    .add('FAQ', () => {
        return <div>
            <h1>🚀 Strongback - React</h1>
            <h2>🙋 FAQ</h2>
            <h3>What's the difference between a Control and a Field?</h3>
            <div>
                <p>A Control is atom level, while a Field is molecule.</p>
                <p>
                    The Control is the minimal operating principles of the input in question, while the Field is that Control, plus things like labels, indicators, tooltips, and error messages.
            </p>
            </div>
            <h3>Hey, these styles looks like garbage!</h3>
            <div>
                <p>That's not a question, but you're right!</p>
                <p>
                    Strongback is a set of design patterns -- not designs. The pattern enforces the principles of an interaction, for example, a Button which is loading, or disabled. How that is rendered differs between projects and products, but the principles apply across them all.
            </p>
            </div>
            <h3>What does strongback mean?</h3>
            <div>
                <p>
                    A strongback lifts a rocket from horizontal to vertical, and supplies it with power and chilled rocket fuel until it's time to launch.
                </p>
                <div>
                    <div>
                        <a href='http://www.spacex.com/sites/spacex/files/crs-3_staticfire.jpg'>
                            Picture
                    </a>
                    </div>
                    <div className='mt3'>
                        See also <a href='https://github.com/redarrowlabs/ignition'>
                            Ignition
                    </a>
                    </div>
                </div>
            </div>
        </div>
    })