import React, { ReactNode } from 'react';
import '../styles/panel.css';

interface Props {
    children: ReactNode
    fixed?: boolean
    direction?: string
}

export default function Panel (props: Props) {
    const isFixed = props.fixed === true ? 'panel--fixed' : '';

    return (
        <div className={`${props.direction} panel ${isFixed}`}>
            {props.children}
        </div>
    );
};
