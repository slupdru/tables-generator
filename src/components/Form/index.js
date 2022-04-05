import React from 'react';
import styles from './index.module.scss'
import Input from '../Input';
import SubmitButton from './SubmitButton';
import Select from './Select'
import { Formik } from 'formik';

const citiesOptions = [
    { value: 'Riga', label: 'Riga' },
    { value: 'Daugavpils', label: 'Daugavpils' },
    { value: 'Jūrmala', label: 'Jūrmala' },
    { value: 'Ventspils', label: 'Ventspils' }
]

const initialValuesDefault = {
    name: '',
    surname: '',
    age: '',
    city: null 
}

function mapSubmitedData(values){
    return {...values, city:values.city.value }
}

function mapInitialValues(values){
    return values ? {...values, city:citiesOptions.find(el=>el.value === values.city)} : initialValuesDefault 
}

export default ({onSubmit: onSubmitProp, submitButtonText, initialValues}) => {
    const onSubmit = React.useCallback((values, {resetForm}) => {
        onSubmitProp(mapSubmitedData(values))
        resetForm()
    }, [onSubmitProp])

    return (
        <Formik
        initialValues={mapInitialValues(initialValues)}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
            <form className={styles.root} onSubmit={handleSubmit}>
                <Input value={values.name} placeholder='Name' onChange={handleChange} name="name" />
                <Input value={values.surname} placeholder='Surname' onChange={handleChange} name="surname" />
                <Input value={values.age} placeholder='Age' onChange={handleChange} name="age" />
                <Select value={values.city} options={citiesOptions} placeholder="Select" onChange={(option)=>setFieldValue('city', option)}/>
                <SubmitButton value={submitButtonText} disabled={Object.values(values).some(el=>!Boolean(el))}/>
            </form>
        )}
      </Formik>
    )
}