import React from "react";
import TableBar from "./TableBar";
import styles from './index.module.scss'
import TableRow from "./TableRow";

export default ({ data, isDeleteAvailable, onEditRow, index: tableIndex, dispatch }) => {
    const onCopy = React.useCallback(
        () => dispatch({ type: 'copyTable', payload: { tableIndex } }),
        [dispatch, tableIndex]
    );

    const onDelete = React.useCallback(() => {
        dispatch({ type: 'deleteTable', payload: { tableIndex } })
    }, [dispatch, tableIndex]
    );

    return (
        <div className={styles.root}>
            <TableBar onCopy={onCopy} onDelete={isDeleteAvailable ? onDelete: undefined} />
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
                        <TableRow
                            key={id}
                            name={name}
                            surname={surname}
                            age={age}
                            city={city}
                            tableIndex={tableIndex}
                            id={id}
                            onEditRow={onEditRow}
                            dispatch={dispatch}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
