/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styles from './index.module.scss'
import CopyButton from './CopyButton';
import CrossButton from './CrossButton';

export default ({onCopy, onDelete}) => {
    return (<div className={styles.root}>
        {onCopy && <CopyButton onClick={onCopy}>Copy table</CopyButton>}
        {onDelete && <CrossButton onClick={onDelete}/>}
    </div>)
}