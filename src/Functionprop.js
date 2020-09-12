import React from 'react';

function Functionprops(props) {
    return (
        <div>
            <h3>This is working in a functional component.</h3>,
            <h3>Welcome to functional component {props.name} from {props.place}.</h3>
        </div>
    );
}
export default Functionprops;