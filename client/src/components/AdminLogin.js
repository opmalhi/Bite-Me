import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'
import { UserContext } from './../App';
import Navbar from './Nav'

const Login = () => {
const {state, dispatch} = useContext(UserContext);

    const history = useHistory();
    const [username, setUsername] =useState([])
    const [password, setPassword] =useState([])

    dispatch({type: "ADMIN", payload:false})

    const loginCheck=() => {
      Axios.post("http://localhost:3001/adminlogin",{
        username :username,
        password :password
      });
      dispatch({type: "ADMIN", payload:true})
      history.push('/adminhome')
  }
  
    return (
        <>
        <title>Admin Login</title>
        <Navbar/>
    <form id="form" style={{fontFamily:"Quicksand, sans-serif", backgroundColor:"rgba(44,40,52,0.73)", width:"320px",padding:"40px",marginLeft:"40%",marginTop:"10%"}}>
            <h1 id="head" style={{color:"rgb(193,166,83)"}}>ADMIN LOGIN</h1>
            <div class="text-center"></div>
            <div class="form-group"><input class="form-control" type="text" placeholder="Username"  onChange={(event) => {setUsername(event.target.value)}}/></div>
            <div class="form-group"><input class="form-control" type="password" placeholder="Password"  onChange={(event) => {setPassword(event.target.value)}}/></div>
            <button class="btn btn-light" id="butonas" style={{width:"100%", height:"100%", marginBottom:"10px", backgroundColor:"rgb(106,176,209)"}} type="submit" onClick={loginCheck}>LOGIN</button>
            <a id="linkas" style={{fontSize:"12px", margin:"auto", marginLeft:"0", marginRight:"0", marginBottom:"0", marginTop:"0",paddingLeft:"0", paddingRight:"0", color:"rgb(177,151,70)"}} href="/signup">Don't Have An Account: Sign Up</a>
        </form>  
        </>
    )
}

export default Login
