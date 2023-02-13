import React, { useState } from 'react'
import styles from './form.module.css'
import FormInput from './formInput'

export default function form() {
  console.log('form: re-rendered');

  const [formVal, setFormVal] = useState({
    username: '',
    email: '',
    dateofbirth: '',
    password: '',
    confirmpassword: ''
  })

  const formAttributes = [
    {
      id: 1,
      name: 'Uname',
      type: 'text',
      title: 'username',
      placeholder: 'username'
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      title: 'email',
      placeholder: 'email'
    },
    {
      id: 3,
      name: 'DOB',
      type: 'text',
      title: 'date of birth',
      placeholder: 'MM/DD/YYYY'
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      title: 'password',
      placeholder: 'password'
    },
    {
      id: 5,
      name: 'Confpassword',
      type: 'password',
      title: 'confirm password',
      placeholder: 'confirm password'
    }
  ]

  return (
    <form className={styles.form_container}>
      {formAttributes.map((input) => {
        return <FormInput key={input.id} {...input} value={formVal} setValue={setFormVal}/>
      })}
      <button onClick={(e) => e.preventDefault()} type='submit'>submit</button>
    </form>
  )
}
