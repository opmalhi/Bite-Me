import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'
import Navbar from './UserNav'

const BookTable = () => {
    const history = useHistory();
    const [name, setName] =useState([])
    const [email, setEmail] =useState([])
    const [bookTime, setBookTime] =useState([])
    const [date, setDate] =useState([])
    const [contact, setContact] =useState([])
    const addReservation=() => {
        Axios.post("http://localhost:3001/addreservation",{
          name: name,
          email: email,
          bookTime: bookTime,
          date: date,
          contact: contact
        });
        history.push('/userhome');
    }
    return (
        <>
        <title>Book Table</title>
        <Navbar/>
            <form id="form" style={{fontFamily:"Quicksand, sans-serif", backgroundColor:"rgba(44,40,52,0.73)", width:"320px",padding:"40px",marginLeft:"40%",marginTop:"20px"}}>
            <h1 id="head" style={{color:"rgb(193,166,83)"}}>RESERVE TABLE</h1>
            <div class="text-center"></div>
            <div class="form-group"><input class="form-control" type="text" placeholder="Name" onChange={(event) => {setName(event.target.value)}}/></div>
            <div class="form-group"><input class="form-control" type="email" placeholder="Email" onChange={(event) => {setEmail(event.target.value)}}/></div>
            <div class="form-group"><input class="form-control" type="text" placeholder="Time" onChange={(event) => {setBookTime(event.target.value)}}/></div>
            <div class="form-group"><input class="form-control" type="date" placeholder="Date" onChange={(event) => {setDate(event.target.value)}}/></div>
            <div class="form-group"><input class="form-control" type="number" placeholder="Contact" onChange={(event) => {setContact(event.target.value)}}/></div>
            <button class="btn btn-light" id="butonas" style={{width:"100%", height:"100%", marginBottom:"10px", backgroundColor:"rgb(106,176,209)"}} type="submit" onClick={addReservation}>Book Table</button>
        </form>
        </>
    )
}

export default BookTable
