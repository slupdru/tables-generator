import React from 'react';
import styles from './index.module.scss'
import { ReactComponent as CrossIcon } from './cross.svg';

export default ({ onClick }) => {
    return <button onClick={onClick} className={styles.root}>
        <CrossIcon/>
    </button>
}