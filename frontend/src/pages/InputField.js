import { Grid, TextField } from '@mui/material'
import React from 'react'

const InputField = ({name, label, type, half, error}) => {
  return (
    <Grid item  xs={12} sm={half? 6 :12 }>
    <TextField 
        name={name} 
        label={label} 
        type={type} 
        fullWidth
    />
    {/* <p style={{display: error ? 'block' : "none"}}> </p> */}
    </Grid>
  )
}

export default InputField