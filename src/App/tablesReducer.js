import { v1 } from 'uuid';

export function reducer(tablesData, action) {
    const newTablesData = [...tablesData];
    const { payload } = action;
    switch (action.type) {
        case 'addPerson':
            newTablesData[0] = {
                ...newTablesData[0],
                data: [...newTablesData[0].data, { ...payload.person, id: v1() }]
            }
            return newTablesData;
        case 'modalSubmit':
            newTablesData[payload.tableIndex] = {
                ...newTablesData[payload.tableIndex],
                data: newTablesData[payload.tableIndex].data.map(
                    el => el.id === payload.person.id ? payload.person : el
                )
            }
            return newTablesData;
        case 'deleteRow':
            newTablesData[payload.tableIndex] = {
                ...newTablesData[payload.tableIndex],
                data: newTablesData[payload.tableIndex].data.filter(el => el.id !== payload.id)
            }
            return newTablesData;
        case 'copyTable':
            newTablesData.splice(
                payload.tableIndex + 1, 0, { ...newTablesData[payload.tableIndex], id: v1() }
            )
            return newTablesData;
        case 'deleteTable':
            newTablesData.splice(payload.tableIndex, 1)
            return newTablesData;
        default:
            throw new Error("unknown action.type");
    }
}  