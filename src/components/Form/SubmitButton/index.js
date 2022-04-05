import React from "react";
import styles from './index.module.scss'

export default ({ value, disabled }) => {
    return (
        <input
            type="submit"
            value={value}
            className={styles.root}
            disabled={disabled}
        />
    )
}