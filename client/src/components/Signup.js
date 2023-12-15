import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'
import Navbar from './Nav'

const Signup = () => {
  const history = useHistory();
const [name, setName] =useState([])
  const [username, setUsername] =useState([])
  const [password, setPassword] =useState([])
  const [email, setEmail] =useState([])
  const [phone, setPhone] =useState([])
  const [DOB, setDOB] =useState([])
  const [address, setAddress] =useState([])

  const addUser=() => {
      Axios.post("http://localhost:3001/signup",{
        name:name,
        username :username,
        password :password,
        email :email,
        phone:phone,
        DOB :DOB,
        address :address
      });
      history.push('/login');
  }

    return (

        <>
        <title>Sign up</title>
        <Navbar/>
    <form id="form" style={{fontFamily:"Quicksand, sans-serif", backgroundColor:"rgba(44,40,52,0.73)", width:"320px",padding:"40px",marginLeft:"40%",marginTop:"20px"}}>
            <h1 id="head" style={{color:"rgb(193,166,83)"}}>SIGN UP</h1>
            <div class="text-center"></div>
            <div class="form-group"><input class="form-control" type="text" placeholder="Name" onChange={(event) => {setName(event.target.value)}}/></div>
            <div class="form-group"><input class="form-control" type="text" placeholder="Username" onChange={(event) => {setUsername(event.target.value)}}/></div>
            <div class="form-group"><input class="form-control" type="email" placeholder="Email" onChange={(event) => {setEmail(event.target.value)}}/></div>
            <div class="form-group"><input class="form-control" type="password" placeholder="Password" onChange={(event) => {setPassword(event.target.value)}}/></div>
            <div class="form-group"><input class="form-control" type="number" placeholder="Phone" onChange={(event) => {setPhone(event.target.value)}}/></div>
            <div class="form-group"><input class="form-control" type="date" placeholder="Date of Birth" onChange={(event) => {setDOB(event.target.value)}}/></div>
            <div class="form-group"><input class="form-control" type="text" placeholder="Address" onChange={(event) => {setAddress(event.target.value)}}/></div>
            <button class="btn btn-light" id="butonas" style={{width:"100%", height:"100%", marginBottom:"10px", backgroundColor:"rgb(106,176,209)"}} type="submit" onClick={addUser}>Create Account</button>
            <a id="linkas" style={{fontSize:"12px", margin:"auto", marginLeft:"0", marginRight:"0", marginBottom:"0", marginTop:"0",paddingLeft:"0", paddingRight:"0", color:"rgb(177,151,70)"}} href="/login">Account already exists: Login In</a>
        </form>
        </>
    )
}

export default Signup
