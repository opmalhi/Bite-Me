import React, {useContext} from 'react'
import './nav.css';
import { UserContext } from './../App';

export default function UserNav() {
  const {state, dispatch} = useContext(UserContext);

  const RenderMenu = () => {
    
      return (
        <>
<body>
                    <ul>
                      <li>
                    <a href="/userhome">Home
                    <span></span><span></span><span></span><span></span>
                    </a>
                    </li>
                    <li>
                    <a href="/addreservation">Book Table
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
                        <a href="/userhome">
                            
                            <img src="images/logo-icon.png" alt="Logo" />
                        </a>
                    </div>
                    
                    <RenderMenu/>
                  </body>
    )
}
