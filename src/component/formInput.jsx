import React from 'react'
import styles from './formInput.module.css'

export default function formInput({name, title, type}) {
  return (
    <div className={styles.input_container}>
      <label className={styles.label} htmlFor={name}>{title}</label>
      <input name={name} type={type} />
    </div>
  )
}
