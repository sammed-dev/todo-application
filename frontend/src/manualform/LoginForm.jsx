import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import React, {useState} from 'react'
import FormInput from './FormInput'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios'
import uuid from "react-uuid";
import { Link, useNavigate } from 'react-router-dom';



const LoginForm = () => {

  const nevigate = useNavigate()
  const [values, setValues] = useState({
    email : "",
    password:""
  })

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "invalid email address!",
      label: "Email",
      required: true,
    },
    
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    }
  ];


  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(values);
    axios.post('http://localhost:8080/todoapp/webapi/user/login',{
            email : values.email,
            password : values.password
          }).then(response=>{
            if(response.data){
              localStorage.setItem("user", JSON.stringify(response.data))
              nevigate("/")
            }
          })
  }

  const onChange = (e) =>{
    setValues({...values, [e.target.name] : e.target.value})
  }


  return (
    <Container className='app' component="main" maxWidth="xs">
      <Box style={{marginLeft:"11rem", marginTop:"1rem"}}>
        
        <Typography style={{marginLeft:"-2rem", marginTop:"1rem", fontFamily:"Grand Hotel", fontSize:"3rem"}} variant='h5'> Sign in </Typography>
        </Box>
        <form className='form' onSubmit={handleSubmit}>
        {inputs.map((input)=>(
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))}
          
            <Button className='button' style={{marginTop : "1rem"}} type="submit" fullWidth variant="contained" color="primary" >
              Sign in
            </Button>
        </form>
        <p> Don't have account ? <Link to="/register"> create account </Link> </p> 
    </Container>
  )
}

export default LoginForm