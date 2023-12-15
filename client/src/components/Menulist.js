import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'
import Navbar from './AdminNav'

const Menulist = () => {
    const [menuList, setMenuList] = useState([]);

    useEffect(()=>{
      Axios.get("http://localhost:3001/allitem").then((response)=>{
        setMenuList(response.data);
      })
    },[]);

const [newName,setName] = useState('');
const [newPrice,setPrice] = useState('');
const [newDesc,setDesc] = useState('');
const [newImage,setImage] = useState('');


  const UpdateAdmin = (id) =>{
    Axios.put('http://localhost:3001/updateitem', {
      id:id,
      newName:newName,
      newPrice:newPrice,
      newDesc:newDesc,
      newImage:newImage

    });
  }

const deleteAdmin=(id)=>{
  Axios.delete(`http://localhost:3001/deleteitem/${id}`)
}

    return (
        <>
                  <title>Menu</title>
        <Navbar/>
        
	<div id="menu" class="site-menu site-dark-section-a">
    	<div class="menu-element-1 wow rotateInDownLeft" data-wow-duration="2s"> <img src="images/menu-element-1.png" alt="menu-element1" />
        </div>
        <div class="menu-element-2 wow rotateInDownRight" data-wow-duration="3s"> <img src="images/menu-element-2.png" alt="menu-element2" />
        </div>

        <div class="container">
            <div class="row">
            
                <div class="site-menu-main">
                	
                    <h2>Yummy n testy</h2>
                    <h1>delicious Menu</h1>
                    <div class="col-xs-12">
                    	
                    	<div class="tab">
                    	<div id="parentHorizontalTab">
                        
                            
                            <div class="resp-tabs-container hor_1">
                            
                                
                                <div>
                                    
                                    <div class="row">
                                        
                                        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 ">
                                            <div class="menu-left-colom">
                                                <figure> <img src="images/menu-dish1.jpg" alt="menu-dish1" /> </figure>
                                                <figure> <img src="images/menu-dish2.jpg" alt="menu-dish2" /> </figure>
                                                <figure> <img src="images/menu-dish3.jpg" alt="menu-dish3" /> </figure>
                                                <figure> <img src="images/menu-dish4.jpg" alt="menu-dish4" /> </figure>
                                            </div>
                                        </div>
                                        
                                        
                                        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 ">
                                            <div class="menu-right-colom"> 
                                                {menuList.map((val)=>{
                                                    return(<>
                                                    <div class="menu-row">
                                                                <figure><img src={val.image} alt="dish1"/></figure>
                                                                <div class="menu-row-inner">
                                                                    <h4>
                                                                        {val.name}
                                                                    </h4>
                                                                    <div class = "price">
                                                                        Rs-{val.price}
                                                                        </div>
                                                                    <p>
                                                                        {val.desp}
                                                                    </p>
                                                            </div>
                                                            </div>
                                         </>)
                                       })}
                                       
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
					</div>
                    </div>
				</div>
                    
			</div>
		</div>
	</div>
	</div>
        </>
    )
}

export default Menulist
