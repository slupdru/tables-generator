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

function mapSubmitedData(values) {
    return { ...values, city: values.city.value }
}

function mapInitialValues(values) {
    return values ? { ...values, city: citiesOptions.find(el => el.value === values.city) } : initialValuesDefault
}

export default ({ onSubmit: onSubmitProp, submitButtonText, initialValues }) => {
    const onSubmit = React.useCallback((values, { resetForm }) => {
        onSubmitProp(mapSubmitedData(values))
        resetForm()
    }, [onSubmitProp])

    return (
        <Formik
            initialValues={mapInitialValues(initialValues)}
            onSubmit={onSubmit}
            enableReinitialize={true}
            validate={values => {
                const errors = {};
                const numberAge = Number(values.age)
                if (!(Number.isInteger(numberAge) && numberAge < 130)) {
                    errors.age = 'Age entered incorrectly';
                }
                if (values.name.length > 102) {
                    errors.name = 'Please enter a shorter name';
                }
                if (values.surname.length > 102) {
                    errors.surname = 'Please enter a shorter surname';
                }
                return errors;
            }}
        >
            {({
                values,
                errors,
                handleChange,
                handleSubmit,
                setFieldValue,
            }) => (
                <form className={styles.root} onSubmit={handleSubmit}>
                    <Input value={values.name} placeholder='Name' onChange={handleChange} name="name" errorMessage={errors.name} />
                    <Input value={values.surname} placeholder='Surname' onChange={handleChange} name="surname" errorMessage={errors.surname} />
                    <Input value={values.age} placeholder='Age' onChange={handleChange} name="age" errorMessage={errors.age} />
                    <Select value={values.city} options={citiesOptions} placeholder="Select" onChange={(option) => setFieldValue('city', option)} />
                    <SubmitButton value={submitButtonText} disabled={Object.values(values).some(el => !Boolean(el))} />
                </form>
            )}
        </Formik>
    )
}