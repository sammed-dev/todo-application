import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import React, {useState} from 'react'
import FormInput from './FormInput'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios'
import uuid from "react-uuid";
import { Link, useNavigate } from 'react-router-dom';

const SignUpForm = () => {

  const nevigate = useNavigate()
  const [values, setValues] = useState({
    firstname:"",
    lastname :"",
    email : "",
    password:""
  })

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "firstname",
      errorMessage:
        "firstname too short",
      label: "firstname",
      pattern: "^[A-Za-z0-9]{4,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "lastname",
      errorMessage:
        "lastname too short",
      label: "lastname",
      pattern: "^[A-Za-z0-9]{4,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "invalid email address!",
      label: "Email",
      required: true,
    },
    
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "weak password",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    }
  ];

  const handleSubmit = (e)=>{
    e.preventDefault()
    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()));
    console.log(values);
    const userId = uuid()
        axios.post('http://localhost:8080/todoapp/webapi/user/register',{
              firstName : values.firstname,
              lastName : values.lastName,
              email : values.email,
              password : values.password,
              userId : userId
            }).then(response=>{
              if(response.data.message){
                console.log(response.data);
                nevigate("/login")
              }
          })
  }

  const onChange = (e) =>{
    setValues({...values, [e.target.name] : e.target.value})
  }

  return (
    <Container className='app' component="main" maxWidth="xs">
      <Box style={{marginLeft:"11rem", marginTop:"1rem"}}>
        
        <Typography style={{marginLeft:"-2rem", marginTop:"1rem", fontFamily:"Grand Hotel", fontSize:"3rem"}} variant='h5'> Register </Typography>
        </Box>
        <form className='form' onSubmit={handleSubmit}>
            {inputs.map((input)=>(
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))}
            <Button className='button' style={{marginTop : "1rem"}} type="submit" fullWidth variant="contained" color="primary" >
              signup
            </Button>
        </form>
        <p> Already have account ? <Link to="/login"> Login </Link> </p> 
    </Container>
  )
}

export default SignUpForm



// <FormInput key={input.id} name={input.name} placeholder={input.placeholder} />