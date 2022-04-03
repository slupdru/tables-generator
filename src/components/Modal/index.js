import React from 'react';
import styles from './index.module.scss';

export default ({ children, isShown}) => {
   return(<div className={`${styles.root} ${isShown ? styles.isShown: ''}`}>
        <div className={styles.modalContent}>{children}</div>
    </div>)
}