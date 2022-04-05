import React from 'react'
import styles from './index.module.scss';
import Form from '../components/Form'
import Table from '../components/Table'
import Modal from '../components/Modal'
import { v1 } from 'uuid';
import { reducer } from './tablesReducer';

export default () => {
  const [tablesData, dispatch] = React.useReducer(reducer, [{ id: v1(), data: [] }]);

  const [showModalWithItem, setShowModalWithItem] = React.useState(undefined);

  const handleModalSubmit = React.useCallback((person, tableIndex) => {
    dispatch({ type: 'modalSubmit', payload: { person, tableIndex } })
    setShowModalWithItem(undefined)
  }, [])

  const onEditRow = React.useCallback((id, tableIndex) => {
    setShowModalWithItem({ id, tableIndex })
  }, [])

  const handleAddPerson = React.useCallback((person) => {
    dispatch({ type: 'addPerson', payload: { person } })
  }, [])

  return (
    <div className={styles.root}>
      <Form onSubmit={(handleAddPerson)} submitButtonText="ADD" />
      <div className={styles.tablesList}>
        {tablesData.map(({ data, id: tableId }, index) => (
          <Table
            key={tableId}
            index={index}
            dispatch={dispatch}
            isDeleteAvailable={index !== 0}
            onEditRow={onEditRow}
            data={data} />
        )
        )}
      </div>
      <Modal isShown={Boolean(showModalWithItem)}>
        <Form
          initialValues={showModalWithItem && tablesData[showModalWithItem.tableIndex].data.find(el => el.id === showModalWithItem.id)}
          onSubmit={(person) => handleModalSubmit(person, showModalWithItem.tableIndex)}
          submitButtonText="OK"
        />
      </Modal>
    </div>
  );
};
