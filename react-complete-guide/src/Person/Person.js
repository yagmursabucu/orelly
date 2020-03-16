import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Im a {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;
