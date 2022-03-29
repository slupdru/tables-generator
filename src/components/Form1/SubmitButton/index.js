import React from "react";
import styles from './index.module.scss'

const SubmitButton = ({ value }) => {
    return <input type="submit" value={value}
        className={styles.root}
    />
}
export default SubmitButton