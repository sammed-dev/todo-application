import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import uuid from "react-uuid";

const initalValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Signup = () => {

  const nevigate = useNavigate()

  return (
    <Box sx={{width:{xs:"50vw"}}} className="MaterialForm">
      <Typography variant="h4" fontFamily="Grand Hotel" fontSize="3rem"> 
        Register
      </Typography>
      <Formik
        initialValues={initalValues}
        validationSchema={object({
          email: string().required("Please enter email").email("Invalid email"),
          firstName: string().required("Please enter first name").min(3, "firstName too short"),
          lastName: string().required("Please enter last name").min(3, "lastName too short"),
          password: string()
            .required("Please enter password")
            .min(7, "Password should be minimum 7 characters long"),
        })}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          const userId = uuid()
          axios.post('http://localhost:8080/todoapp/webapi/user/register',{
                firstName : values.firstName,
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
          formikHelpers.resetForm();
            
        }}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>

            <Field
              name="firstName"
              type="firstName"
              as={TextField}
              variant="outlined"
              color="primary"
              label="firstName"
              fullWidth
              error={Boolean(errors.firstName) && Boolean(touched.firstName)}
              helperText={Boolean(touched.firstName) && errors.firstName}
            />
            <Box height={14} />

            <Field
              name="lastName"
              type="lastName"
              as={TextField}
              variant="outlined"
              color="primary"
              label="lastName"
              fullWidth
              error={Boolean(errors.lastName) && Boolean(touched.lastName)}
              helperText={Boolean(touched.lastName) && errors.lastName}
            />
            <Box height={14} />
            <Field
              name="email"
              type="email"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Email"
              fullWidt
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />
            <Box height={14} />

            <Field
              name="password"
              type="password"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Password"
              fullWidth
              error={Boolean(errors.password) && Boolean(touched.password)}
              helperText={Boolean(touched.password) && errors.password}
            />
            <Box height={14} />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={!isValid || !dirty}
            >
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
      <p> Already have account ? <Link to="/login"> Login </Link> </p> 
    </Box>
  );
}

export default Signup