import React from 'react'
import Nav from './UserNav'
const UserHome = () => {
    return (
        <>
        <title>User Home</title>
            <Nav/>
            <div>
            <img src="./images/4.jpg" style={{width:'100%'}}/>
            <div class="centered" style={{}}>Welcome To</div>
            <p class="res" style={{fontFamily: "poppins"}}>User Dashboard</p>
            </div>

        </>
    )
}

export default UserHome
