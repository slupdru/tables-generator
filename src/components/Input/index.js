import React from "react";
import styles from './index.module.scss'

const Input = ({ value, onChange, placeholder, name }) => {
    return <input
        className={styles.root}
        name={name}
        type="text" value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={(e) => e.target.placeholder = ""}
        onBlur={(e) => e.target.placeholder = placeholder}
    />
}
export default Input