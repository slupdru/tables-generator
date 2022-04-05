import React from 'react'
import styles from './index.module.scss';
import Form from '../components/Form'
import Table from '../components/Table'
import Modal from '../components/Modal'
import { v1 } from 'uuid';



function reducer(tablesData, action) {
  const newTablesData = [...tablesData];
  const {payload} = action;
  switch (action.type) {
    case 'addPerson':
      newTablesData[0] = [...newTablesData[0], { ...payload.person, id: v1() }]
      return newTablesData;
    case 'modalSubmit':
      newTablesData[payload.tableIndex] = newTablesData[payload.tableIndex].map(el => el.id === payload.person.id ? payload.person : el)
      return newTablesData;
    case 'deleteRow':
      newTablesData[payload.tableIndex] = newTablesData[payload.tableIndex].filter(el => el.id !== payload.id)
      return newTablesData;
    case 'copyTable':
      newTablesData.splice(payload.tableIndex+1, 0, newTablesData[payload.tableIndex])
      return newTablesData;
    case 'deleteTable':
      newTablesData.splice(payload.tableIndex, 1)
      return newTablesData;
    default:
      throw new Error();
  }
}

export default () => {
  const [tablesData, dispatch] = React.useReducer(reducer, [[]]);

  const [showModalWithItem, setShowModalWithItem] = React.useState(undefined);

  const handleModalSubmit = (person, tableIndex) => {
    dispatch({type: 'modalSubmit', payload: {person, tableIndex}})
    setShowModalWithItem(undefined)
  }
  const onEditRow = React.useCallback((id, tableIndex) => {
    setShowModalWithItem({ id, tableIndex })
  }, [])

  const handleAddPerson = React.useCallback((person) => {
    dispatch({type: 'addPerson', payload: {person}})
  }, [])

  return (
    <div className={styles.root}>
      <Form onSubmit={(handleAddPerson)} submitButtonText="ADD" />
      <div className={styles.tablesList}>
        {tablesData.map((data, index) => (
          <Table
            key={index}
            onEditRow={(id) => onEditRow(id, index)}
            onDeleteRow={(id) => { dispatch({type:'deleteRow', payload: {id, tableIndex:index}})}}
            onCopy={ ()=> { dispatch({type:'copyTable', payload: {tableIndex:index}})}}
            onDelete={index !== 0 ? ()=> dispatch({type:'deleteTable', payload: {tableIndex:index}}) : undefined}
            data={data} />
        )
        )}
      </div>
      <Modal isShown={Boolean(showModalWithItem)}>
        <Form 
          initialValues={showModalWithItem && tablesData[showModalWithItem.tableIndex].find(el => el.id === showModalWithItem.id)}
          onSubmit={(person) => handleModalSubmit(person, showModalWithItem.tableIndex)}
          submitButtonText="OK" 
        />
      </Modal>
    </div>
  );
};
