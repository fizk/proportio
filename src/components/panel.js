import React from 'react';
import '../styles/panel.css';

export default function Panel (props) {
    const isFixed = props.fixed === true ? 'panel--fixed' : '';

    return (
        <div className={`${props.direction} panel ${isFixed}`}>
            {props.children}
        </div>
    );
};
