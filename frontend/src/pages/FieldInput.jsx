import { Field } from 'formik'
import React from 'react'

const FieldInput = ({name, as, variant, color, label, error, helperText}) => {
  return (
    <Field 
        name={name} 
        as={as} 
        variant={variant} 
        label={label} 
        fullWidth 
        error={error} 
        helperText={helperText} 
    />
  )
}

export default FieldInput