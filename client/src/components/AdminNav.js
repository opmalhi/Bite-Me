import React, {useContext} from 'react'
import './nav.css';
import { UserContext } from './../App';

export default function AdminNav() {
  const {state, dispatch} = useContext(UserContext);

  const RenderMenu = () => {
    
      return (
        <>
<body>
                    <ul>
                      <li>
                    <a href="/adminhome">Home
                    <span></span><span></span><span></span><span></span>
                    </a>
                    </li>
                    <li>
                    <a href="/allitem">Menu
                    <span></span><span></span><span></span><span></span>
                    </a>
                    </li>
                    <li>
                    <a href="/additem">Add Item
                    <span></span><span></span><span></span><span></span>
                    </a>
                    </li>
                    <li>
                    <a href="/allcustomer">Customer
                    <span></span><span></span><span></span><span></span>
                    </a>
                    </li>
                    <li>
                    <a href="/addadmin">Add Admin
                    <span></span><span></span><span></span><span></span>
                    </a>
                    </li>
                    <li>
                    <a href="/alladmin">All Admin
                    <span></span><span></span><span></span><span></span>
                    </a>
                    </li>
                    <li>
                    <a href="/allreservation">Reservations
                    <span></span><span></span><span></span><span></span>
                    </a>
                    </li>
                    <li>
                    <a href="/">Logout
                    <span></span><span></span><span></span><span></span>
                    </a>
                    </li>
                    </ul>
                  </body>
        </>
      )
    
  }

    return (
      <body>
                    <div class="site-logo">
                        <a href="/adminhome">
                            
                            <img src="images/logo-icon.png" alt="Logo" />
                        </a>
                    </div>
                    
                    <RenderMenu/>
                  </body>
    )
}
