import React from 'react'
import Nav from './AdminNav'
const AdminHome = () => {
    return (
        <>
        <title>Admin Home</title>
            <Nav/>
            <div>
            <img src="./images/4.jpg" style={{width:'100%'}}/>
            <div class="centered" style={{}}>Welcome To</div>
            <p class="res" style={{fontFamily: "poppins"}}>Admin Dashboard</p>
            </div>

        </>
    )
}

export default AdminHome
