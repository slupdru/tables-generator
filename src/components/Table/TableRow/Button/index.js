import React from 'react';
import styles from './index.module.scss'

export const Style = { normal: 'normal', danger: 'danger' };

export default ({ children, onClick, style }) => {
    return (
        <button className={`${styles.root} ${styles[style]}`} onClick={onClick}>
            {children}
        </button>
    )
}

