import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const user = JSON.parse(localStorage.getItem("user"))

  const nevigate = useNavigate()

  const handleLogout =()=>{
    localStorage.clear()
    nevigate("/login")
  }

  return (
      <AppBar position="sticky" color='transparent' elevation={1} >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"#EC941D", fontSize:"1.6rem" }}>
          🆃🅾🅳🅾🆂
          </Typography>
          {user && <>
          <Avatar style={{marginRight:"0.3rem", color:"black", background:"#abcabc"}} > {user?.firstName?.charAt(0)} </Avatar>
          <IconButton sx={{color:"#123456", transform: "scale(1.6)"}} onClick={handleLogout}>
            <LoginIcon />
          </IconButton>
          </>
          }
        </Toolbar>
      </AppBar>
  );
}

export default Navbar
