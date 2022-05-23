import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";

const initalValues = {
  email: "",
  name: "",
  password: "",
};

const Login = () => {

  const nevigate = useNavigate()

  return (
    <div className="MaterialForm">
      <Typography variant="h4" fontFamily="Grand Hotel" fontSize="3rem">
        Sign in to get started
      </Typography>
      <Formik
        initialValues={initalValues}
        validationSchema={object({
          email: string().required("Please enter email").email("Invalid email"),
          // name: string().required("Please enter name").min(2, "Name too short"),
          password: string()
            .required("Please enter password")
            .min(7, "Password should be minimum 7 characters long"),
        })}
        onSubmit={(values, formikHelpers) => {
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
          formikHelpers.resetForm();
            
        }}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>
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
             Login
            </Button>
          </Form>
        )}
      </Formik>
      <p> Don't have account ? <Link to="/register"> create account </Link> </p> 
    </div>
  );
}

export default Login