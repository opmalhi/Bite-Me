import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'

const AddAdmin = () => {
    const history = useHistory();
    const [username, setUsername] =useState([])
    const [password, setPassword] =useState([])
    const addAdmin=() => {
        Axios.post("http://localhost:3001/addadmin",{
          username :username,
          password :password,
        });
        history.push('/adminhome');
    }
    return (
        <>
        <title>Add Admin</title>
         <form id="form" style={{fontFamily:"Quicksand, sans-serif", backgroundColor:"rgba(44,40,52,0.73)", width:"320px",padding:"40px",marginLeft:"40%",marginTop:"20px"}}>
            <h1 id="head" style={{color:"rgb(193,166,83)"}}>ADD ADMIN</h1>
            <div class="text-center"></div>
            <div class="form-group"><input class="form-control" type="text" placeholder="Username" onChange={(event) => {setUsername(event.target.value)}}/></div>
            <div class="form-group"><input class="form-control" type="password" placeholder="Password" onChange={(event) => {setPassword(event.target.value)}}/></div>
            <button class="btn btn-light" id="butonas" style={{width:"100%", height:"100%", marginBottom:"10px", backgroundColor:"rgb(106,176,209)"}} type="submit" onClick={addAdmin}>ADD ADMIN</button>
        </form>   
        </>
    )
}

export default AddAdmin
