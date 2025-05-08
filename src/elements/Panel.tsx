import React, { ReactNode } from 'react';
import '../styles/panel.css';

interface Props {
    children: ReactNode
    fixed?: boolean
    direction?: string
}

export default function Panel ({
    children,
    fixed,
    direction,
}: Props) {
    const isFixed = fixed === true ? 'panel--fixed' : '';

    return (
        <div className={`${direction} panel ${isFixed}`}>
            {children}
        </div>
    );
};
