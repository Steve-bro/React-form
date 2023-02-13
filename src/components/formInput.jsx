import React, { useEffect, useState } from 'react'
import styles from './formInput.module.css'

export default function formInput(props) {
  const [localVal, setLocalVal] = useState('');

  function handleSubmit(e) {
    setLocalVal(e.target.value)
  }
  console.log(localVal);
  useEffect(() => {
    if (submit) {
      console.log('submit:', submit);
      setValue({...value, username: 'shele'})
      console.log(value);
      setSubmit(0)
    }
  })

  const { placeholder, title, name, type, value, setValue, submit, setSubmit} = props
  console.log(value);

  console.log(submit);
  console.log(`form-input ${name}: re-rendered`);
  return (
    <div className={styles.input_container}>
      <label className={styles.label} htmlFor={name}>{title}</label>
      <input onChange={(e) => handleSubmit(e)} name={name} type={type} placeholder={placeholder}/>
    </div>
  )
}
