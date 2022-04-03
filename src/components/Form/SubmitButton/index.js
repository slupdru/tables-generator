import React from "react";
import styles from './index.module.scss'

const SubmitButton = ({ value, disabled }) => {
    return <input
        type="submit"
        value={value}
        className={styles.root}
        disabled={disabled}
    />
}
export default SubmitButton