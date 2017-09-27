import * as React from 'react';

export function padding(story: any) {
    return <div className='pa3'>
        {story()}
    </div>;
}