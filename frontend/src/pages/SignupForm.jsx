import { Avatar, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import InputField from './InputField'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box } from '@mui/system';

const SignupForm = () => {

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

  return (
    <Container  component="main" maxWidth="xs">
        <Box style={{marginLeft:"11rem", marginTop:"3rem"}}>
        <Avatar style={{backgroundColor :"blue"}}  >
          <LockOutlinedIcon />
        </Avatar>
        <Typography style={{marginLeft:"-2rem", marginTop:"1rem", fontFamily:"Grand Hotel", fontSize:"3rem"}} variant='h5'> Register </Typography>
        </Box>
        <form style={{width:"100%", marginTop:"4rem"}} onSubmit={handleSubmit} >
            <Grid container spacing={2}>
                <InputField name="firstname" label="firstname" type="text" />
                <InputField name="lastname" label="lastname" type="text" />
                <InputField name="email" label="Email Address" type="email" />
                <InputField name="password" label="password" type="password" />
            </Grid>
            <Button  style={{marginTop : "1rem"}} type="submit" fullWidth variant="contained" color="primary" >
            Sign up
          </Button>
        </form>
    </Container>
  )
}

export default SignupForm