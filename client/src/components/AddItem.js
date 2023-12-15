import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'

const AddItem = () => {
    const history = useHistory();
    const [name, setName] =useState([])
    const [desp, setDesp] =useState([])
    const [price, setPrice] =useState([])
    const [image, setImage] =useState([])
    const addItem=() => {
        Axios.post("http://localhost:3001/additem",{
          name :name,
          desp :desp,
          price :price,
          image :image
        });
        history.push('/adminhome');
    }
    return (
        <>
        <title>Add Item</title>
            <form id="form" style={{fontFamily:"Quicksand, sans-serif", backgroundColor:"rgba(44,40,52,0.73)", width:"320px",padding:"40px",marginLeft:"40%",marginTop:"20px"}}>
            <h1 id="head" style={{color:"rgb(193,166,83)"}}>ADD ITEM</h1>
            <div class="text-center"></div>
            <div class="form-group"><input class="form-control" type="text" placeholder="Name" onChange={(event) => {setName(event.target.value)}}/></div>
            <div class="form-group"><input class="form-control" type="text" placeholder="Description" onChange={(event) => {setDesp(event.target.value)}}/></div>
            <div class="form-group"><input class="form-control" type="text" placeholder="Price" onChange={(event) => {setPrice(event.target.value)}}/></div>
            <div class="form-group"><input class="form-control" type="text" placeholder="ImageURL" onChange={(event) => {setImage(event.target.value)}}/><p>Please get image url of 100 * 100 pixel image only</p></div>
            <button class="btn btn-light" id="butonas" style={{width:"100%", height:"100%", marginBottom:"10px", backgroundColor:"rgb(106,176,209)"}} type="submit" onClick={addItem}>ADD ITEM</button>
        </form>
        </>
    )
}

export default AddItem
