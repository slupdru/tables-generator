import React from 'react'
import styles from './index.module.scss'
import { default as Button, Style as ButtonStyle } from "./Button";

export default ({ id, name, surname, age, city, dispatch, onEditRow, tableIndex }) => {
    const handleEditRow = React.useCallback(() => {
        onEditRow(id, tableIndex)
    }, [id, onEditRow, tableIndex])

    const handleDeleteRow = React.useCallback(() => {
        dispatch({ type: 'deleteRow', payload: { id, tableIndex } })
    }, [dispatch, id, tableIndex])

    return (
        <tr key={id}>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{age}</td>
            <td>{city}</td>
            <td>
                <div className={styles.buttonsContainer}>
                    <Button onClick={handleEditRow} style={ButtonStyle.normal}>Edit</Button>
                    <Button onClick={handleDeleteRow} style={ButtonStyle.danger}>Delete</Button>
                </div>
            </td>
        </tr>
    )
}