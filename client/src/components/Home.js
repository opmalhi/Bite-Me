import React from 'react'
import Navbar from './Nav'
import '../App.css'
import Admin from './AllAdmin'
import 'bootstrap/dist/css/bootstrap.min.css'
const Home = () => {
    return (
        <>
        <title>Home</title>
        <Navbar/>
            <div>
            <img src="./images/4.jpg" style={{width:'100%'}}/>
            <div class="centered" style={{}}>Bite Me</div>
            <p class="res" style={{fontFamily: "poppins"}}>Restaurant</p>
            </div>
            <div class="centered">
            <a href = "/menu"><button  type="button" class="btn btn-light btn-lg" style={{marginTop:"430px", marginRight:"100px"}}>View Menu  <i class="fal fa-angle-right"></i></button></a>
            <a href = "/gallery"><button  type="button" class="btn btn-light btn-lg" style={{marginTop:"430px"}}>View Gallery <i class="fal fa-angle-right"></i></button></a>
            <p style = {{color : "white", fontSize :'40px', marginTop:"20px"}}>Please Login to Continue</p>
            </div>
        </>
    )
}

export default Home
