import React, {useState,useEffect} from 'react'
import Axios from 'axios'

const AllCustomer = () => {
    const [customerList, setcustomerList] = useState([]);

    useEffect(()=>{
      Axios.get("http://localhost:3001/allcustomer").then((response)=>{
        setcustomerList(response.data);
      })
    },[]);
    return (
        <>
        <title>Customers</title>
            <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                </tr>
            </thead>
            <tbody>
                {customerList.map((val,key)=>{
                    return(
                        <tr style={{color:"white"}}>
                            <td scope="row">{val.name}</td>
                            <td>{val.username}</td>
                            <td>{val.email}</td>
                            <td>{val.DOB}</td>
                            <td>{val.phone}</td>
                            <td>{val.address}</td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
        </>
    )
}

export default AllCustomer
