import React from 'react';
import css from './Root.css';

export default function Root(props) {
    return (
        <div className={css.wrapper}>
            {props.children}
        </div>
    );
}
