import React from 'react';
import styles from './index.module.scss'

export default ({ children, onClick }) => {
    return (
        <button onClick={onClick} className={styles.root}>{children}</button>
    )
}