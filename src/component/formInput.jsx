import React from 'react'
import styles from './formInput.module.css'

export default function formInput(props) {
  const { placeholder, title, name, type} = props

  console.log('form-input: re-rendered');
  return (
    <div className={styles.input_container}>
      <label className={styles.label} htmlFor={name}>{title}</label>
      <input onChange={(e) => console.log(e.target.value)} name={name} type={type} placeholder={placeholder}/>
    </div>
  )
}
