import React, {useContext} from 'react'
import './nav.css';
import { UserContext } from './../App';

export default function Nav() {
  const {state, dispatch} = useContext(UserContext);

  const RenderMenu = () => {
    
      return (
        <>
<body>
                    <ul>
                      <li>
                    <a href="/">Home
                    <span></span><span></span><span></span><span></span>
                    </a>
                    </li>
                    <li>
                    <a href="/about">About Us
                    <span></span><span></span><span></span><span></span>
                    </a>
                    </li>
                    <li>
                    <a href="/gallery">Gallery
                    <span></span><span></span><span></span><span></span>
                    </a>
                    </li>
                    <li>
                    <a href="/login">User Login
                    <span></span><span></span><span></span><span></span>
                    </a>
                    </li>
                    <li>
                    <a href="/adminlogin">Admin Login
                    <span></span><span></span><span></span><span></span>
                    </a>
                    </li>
                    <li>
                    <a href="/signup">Sign Up
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
                        <a href="/">
                            
                            <img src="images/logo-icon.png" alt="Logo" />
                        </a>
                    </div>
                    
                    <RenderMenu/>
                  </body>
    )
}
