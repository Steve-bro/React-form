import React, { useState } from 'react'
import styles from './form.module.css'
import FormInput from './formInput'

export default function form() {
  console.log('form: re-rendered');

  const [submit, setSubmit] = useState(0)
  const [formVal, setFormVal] = useState({
    username: '',
    email: '',
    dateofbirth: '',
    password: '',
    confirmpassword: ''
  })

  console.log(formVal);
  const formAttributes = [
    {
      id: 1,
      name: 'username',
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
      name: 'dateofbirth',
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
      name: 'confirmpassword',
      type: 'password',
      title: 'confirm password',
      placeholder: 'confirm password'
    }
  ]

  return (
    <form className={styles.form_container}>
      {formAttributes.map((input) => {
        return <FormInput key={input.id} {...input} value={formVal} setValue={setFormVal} submit={submit} setSubmit={setSubmit}/>
      })}
      <button onClick={(e) => {e.preventDefault(); setSubmit(1)}} type='submit'>submit</button>
    </form>
  )
}
