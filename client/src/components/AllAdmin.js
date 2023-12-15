import React, {useState,useEffect} from 'react'
import Axios from 'axios'

const AllAdmin = (props) => {
    const [adminList, setadminList] = useState([]);

    useEffect(()=>{
      Axios.get("http://localhost:3001/alladmin").then((response)=>{
        setadminList(response.data);
      })
    },[]);

const [newUsername,setUsername] = useState('');
const [newPassword,setPassword] = useState('');

  const UpdateAdmin = (id) =>{
    Axios.put('http://localhost:3001/updateadmin', {
      id:id,
      newUsername:newUsername,
      newPassword:newPassword
    });
    
  }

const deleteAdmin=(id)=>{
  Axios.delete(`http://localhost:3001/deleteadmin/${id}`)
}

    return (
        <>
        <title>Admin List</title>
            <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
                <tbody>
                    { adminList.map((val,key)=>{
                        return(
                            <tr style={{color:"white"}}>
                                <td><div>{val.username}<br></br><input style={{color:"black"}} type="text" placeholder="NEW Username" onChange={(event)=>{setUsername(event.target.value)}} /></div></td>
                                <td><div>{val.password}<br></br><input style={{color:"black"}} type="text" placeholder="NEW Password" onChange={(event)=>{setPassword(event.target.value)}} /></div></td>
                                <td><div><button class="btn btn-secondary" onClick={()=>deleteAdmin(val._id)}>Delete</button></div>
                                <br></br><button class="btn btn-secondary" onClick={()=>UpdateAdmin(val._id)}>Update</button></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </>
    )
}

export default AllAdmin
