import React from 'react';
import './stuff.css';

const TestNavBar = ({active}) => {

    return (
        <div id='navBar' className='navBar'>
            <a href='#red' className={active === 'red' ? 'active option' : 'option'}>Red</a>
            <a href='#blue' className={active === 'blue' ? 'active option' : 'option'}>Blue</a>
            <a href='#green' className={active === 'green' ? 'active option' : 'option'}>Green</a>
        </div>
    )
}

export default TestNavBar;