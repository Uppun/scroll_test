import React from 'react';
import './stuff.css'

const TestObject = ({color}) => {

    return (
        <div id={color} className='page' style={{backgroundColor: color}}/>
    )
}

export default TestObject;