import React from 'react'
import styles from './index.module.scss';
import Form from '../components/Form'
import Table from '../components/Table'
import Modal from '../components/Modal'
import { v1 } from 'uuid';

export default () => {

  const [tablesData, setTablesData] = React.useState([[]]);

  const [showModalWithItem, setShowModalWithItem] = React.useState(undefined);

  const handleAddPerson = (person) => {
    setTablesData((tableData) => {
      const newTableData = [...tableData];
      newTableData[0] = [...newTableData[0], { ...person, id: v1() }]
      return newTableData;
    })
  }
  const handleModalSubmit = (person, tableIndex) => {
    setTablesData((tableData) => {
      const newTableData = [...tableData]
      newTableData[tableIndex] = newTableData[tableIndex].map(el => el.id === person.id ? person : el)
      return newTableData;
    })
    setShowModalWithItem(undefined)
  }
  const onEditRow = React.useCallback((id, tableIndex) => {
    setShowModalWithItem({ id, tableIndex })
  }, [])

  const onDeleteRow = React.useCallback((id, tableIndex) => {
    setTablesData((tableData) => {
      const newTableData = [...tableData]
      newTableData[tableIndex] = newTableData[tableIndex].filter(el => el.id !== id)
      return newTableData;
    })
  }, [])
  const onCopyTable = React.useCallback((tableIndex) => {
    setTablesData((tableData) => {
      const newTableData = [...tableData]
      newTableData.splice(tableIndex+1, 0, newTableData[tableIndex])
      return newTableData;
    })

  }, [])
  const onDeleteTable = React.useCallback((tableIndex) => {
    setTablesData((tableData) => {
      const newTableData = [...tableData]
      newTableData.splice(tableIndex, 1)
      return newTableData;
    })
  }, [])

  return (
    <div className={styles.root}>
      <Form onSubmit={handleAddPerson} submitButtonText="ADD" />
      <div className={styles.tablesList}>
        {tablesData.map((data, index) => (
          <Table
            key={index}
            onEditRow={(id) => onEditRow(id, index)}
            onDeleteRow={(id) => { onDeleteRow(id, index) }}
            onCopy={ ()=> onCopyTable(index)}
            onDelete={index !== 0 ? ()=> onDeleteTable(index) : undefined}
            data={data} />
        )
        )}
      </div>
      {showModalWithItem && <Modal isShown={true}>
        <Form 
          initialValues={tablesData[showModalWithItem.tableIndex].find(el => el.id === showModalWithItem.id)}
          onSubmit={(person) => handleModalSubmit(person, showModalWithItem.tableIndex)}
          submitButtonText="OK" 
        />
      </Modal>}
    </div>
  );
};
