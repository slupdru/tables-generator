import React from 'react';
import styles from './index.module.scss'
import Input from '../Input';
import SubmitButton from './SubmitButton';

const Form1 = () => {
    const [formState, setFormState] = React.useState({
        Name: '',
        Surname: '',
        Age: '',
        City: ''
    })

    const onChange = React.useCallback((key, value) => {
        setFormState({
            ...formState, 
            [key]: value
        })
    }, [formState])

    const onSubmit = React.useCallback((e) => {
        e.preventDefault()
        console.log(e)
    }, [])

    return <form className={styles.root} onSubmit={onSubmit}>
        <Input value={formState.Name} placeholder={'Name'} onChange={onChange} name="Name"/>
        <Input value={formState.Surname} placeholder={'Surname'} onChange={onChange} name="Surname"/>
        <Input value={formState.Age} placeholder={'Age'} onChange={onChange} name="Age"/>
        <Input value={formState.City} placeholder={'City'} onChange={onChange} name="City"/>
        <SubmitButton value="ADD"/>
    </form>
}
export default Form1