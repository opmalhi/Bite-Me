import React, {useState,useEffect} from 'react'
import Axios from 'axios'

const AllReservation = () => {
    const [reservationList, setreservationList] = useState([]);

    useEffect(()=>{
      Axios.get("http://localhost:3001/allreservation").then((response)=>{
        setreservationList(response.data);
      })
    },[]);

const [newName,setName] = useState('');
const [newEmail,setEmail] = useState('');
const [newBookTime,setBookTime] = useState('');
const [newDate,setDate] = useState('');
const [newContact,setContact] = useState('');


  const UpdateReservation = (id) =>{
    Axios.put('http://localhost:3001/updatereservation', {
      id:id,
      newName:newName,
      newEmail :newEmail,
      newBookTime:newBookTime,
      newDate:newDate,
      newContact:newContact
    });
  }

const deleteReservation=(id)=>{
  Axios.delete(`http://localhost:3001/deletereservation/${id}`)
}

    return (
        <>
        <title>Reservation</title>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Book Time</th>
                <th scope="col">Date</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {reservationList.map((val,key)=>{
                    return(
                        <tr style={{color:"white"}}>
                            <th scope="row">{val.name}<br></br><input style={{color:"black"}} type="text" placeholder="NEW Name" onChange={(event)=>{setName(event.target.value)}} /></th>
                            <td>{val.email}<br></br><input style={{color:"black"}} type="email" placeholder="NEW Email" onChange={(event)=>{setEmail(event.target.value)}} /></td>
                            <td>{val.bookTime}<br></br><input style={{color:"black"}} type="text" placeholder="NEW Time" onChange={(event)=>{setBookTime(event.target.value)}} /></td>
                            <td>{val.date}<br></br><input style={{color:"black"}}type="date" placeholder="NEW Date" onChange={(event)=>{setDate(event.target.value)}} /></td>
                            <td>{val.contact}<br></br><input style={{color:"black"}} type="number" placeholder="NEW Contact" onChange={(event)=>{setContact(event.target.value)}} /></td>
                            <td><div><button class="btn btn-secondary" onClick={()=>deleteReservation(val._id)}>Delete</button></div>
                                <br></br><button class="btn btn-secondary" onClick={()=>UpdateReservation(val._id)}>Update</button></td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
        </>
    )
}

export default AllReservation

