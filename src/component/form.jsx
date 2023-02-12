import React from 'react'
import styles from './form.module.css'
import FormInput from './formInput'

export default function form() {
  return (
    <form className={styles.form_container}>
      <FormInput name='Uname' title='Username'/>
      <FormInput name='email' title='email'/>
      <FormInput name='dob' title='date of birth'/>
      <FormInput name='pass' title='password' type={'password'}/>
      <FormInput name='confPass' title='confirm password' type={'password'}/>
      <button onClick={(e) => e.preventDefault()} type='submit'>submit</button>
    </form>
  )
}
