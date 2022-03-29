import React from "react";
import styles from './index.module.scss'

const Input = ({ value, onChange, placeholder, name }) => {

    const callback = React.useCallback((e)=>{
        onChange(e.target.name, e.target.value)
    }, [onChange])

    return <input
        className={styles.root}
        name={name}
        type="text" value={value}
        onChange={callback}
        placeholder={placeholder}
        onFocus={(e) => e.target.placeholder = ""}
        onBlur={(e) => e.target.placeholder = placeholder}
    />
}
export default Input