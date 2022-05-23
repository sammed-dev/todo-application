import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import SignupDemo from './pages/SignUpDemo';
import { useEffect } from 'react';

function App() {

  const WithRouter = () =>{
    const nevigate = useNavigate()

    useEffect(()=>{
      const user = JSON.parse(localStorage.getItem("user"))
      if(!user)
        nevigate("/login")
    }, [])

      return(
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Signup />} />
        <Route exact path='/registerdemo' element={<SignupDemo />} />
      </Routes>
      )
  } 


  return (
    <BrowserRouter>
      <Navbar />
      <WithRouter />
    </BrowserRouter>
  );
}

export default App;
