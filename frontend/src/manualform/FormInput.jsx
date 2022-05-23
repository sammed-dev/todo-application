import { Grid } from '@mui/material';
import React, { useState } from 'react'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus =(e)=>{
        setFocused(true)
    }

  return (
    <Grid item  xs={12} sm={12} >
        <div className='formInput'>
        <label> {label} </label>
        <input className='input' {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} fu />
        <span > {errorMessage} </span>
        </div>
    </Grid>
  )
}

export default FormInput