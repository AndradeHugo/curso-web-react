import React from 'react';

const hello = (props) => {
    return (
        <>
            <h1>{props.text}</h1>
            {props.children}
        </>
    );
}

export default hello;