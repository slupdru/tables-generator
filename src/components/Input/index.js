import React from "react";
import styles from './index.module.scss'

export default ({ value, onChange, placeholder, name, errorMessage }) => {
    return (
        <div className={styles.root}>
            <input
                className={styles.input}
                name={name}
                type="text" 
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = placeholder}
            />
            {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
        </div>
    )
}