import React from "react";
import TableBar from "../TableBar";
import { default as Button, Style as ButtonStyle } from "./Button";
import styles from './index.module.scss'

export default ({ data, onEditRow, onDeleteRow, onCopy, onDelete }) => {
    return (<div className={styles.root}>
        <TableBar onCopy={onCopy} onDelete={onDelete} />
        <table className={styles.table}>
            <thead>
                <tr>
                    <th width="95px">Name</th>
                    <th width="129px">Surname</th>
                    <th width="96px">Age</th>
                    <th width="80px">City</th>
                    <th width="192px" />
                </tr>
            </thead>
            <tbody>
                {data.map(({ name, surname, age, city, id }) => (
                    <tr key={id}>
                        <td>{name}</td>
                        <td>{surname}</td>
                        <td>{age}</td>
                        <td>{city}</td>
                        <td>
                            <div className={styles.buttonsContainer}>
                                <Button onClick={() => { onEditRow(id) }} style={ButtonStyle.normal}>Edit</Button>
                                <Button onClick={() => { onDeleteRow(id) }} style={ButtonStyle.danger}>Delete</Button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>)
}