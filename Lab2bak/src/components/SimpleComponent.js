import React from 'react';

const SimpleComponent = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default SimpleComponent;