import React, {forwardRef} from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const ThisWillWork = forwardRef((props, ref) => {
    return <button ref={ref}>Reference</button>;
});

function ThisRef(text) {

    return (
        <Tippy content={text}>
            <ThisWillWork />

        </Tippy>
    );
}

export default ThisRef