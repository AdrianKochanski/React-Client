import React from 'react';
import Header from './navigation/Header';

export default (props) => {

    return (
        <div>
            <Header/>
            {props.children}
        </div>
    );
}