import './App.css';
import React, {createContext, useReducer} from 'react'
import Home from './components/Home'
import Login from './components/Login'
import AdminLogin from './components/AdminLogin'
import Signup from './components/Signup'
import AddAdmin from './components/AddAdmin'
import AllAdmin from './components/AllAdmin'
import Additem from './components/AddItem'
import Allitem from './components/Menulist'
import Menu from './components/Menu'
import AddReservation from './components/BookTable'
import AllReservation from './components/AllReservation'
import AllCustomer from './components/AllCustomer'
import AdminHome from './components/AdminHome'
import UserHome from './components/UserHome'
import Error from './components/Error'
import Gallery from './components/Gallry'
import About from './components/About'


import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { initialState, reducer } from './reducer/useReducer';

export const UserContext = createContext();
function App() {

const [state, dispatch] = useReducer(reducer, initialState)
  return (

    <div className="App">
    <UserContext.Provider value={{state, dispatch}}>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/login' component={Login}/>
    <Route path='/adminlogin' component={AdminLogin}/>
    <Route path='/signup' component={Signup}/>
    <Route path='/addadmin' component={AddAdmin}/>
    <Route path='/alladmin' component={AllAdmin}/>
    <Route path='/additem' component={Additem}/>
    <Route path='/allitem' component={Allitem}/>
    <Route path='/menu' component={Menu}/>
    <Route path='/addreservation' component={AddReservation}/>
    <Route path='/allreservation' component={AllReservation}/>
    <Route path='/allcustomer' component={AllCustomer}/>
    <Route path='/adminhome' component={AdminHome}/>
    <Route path='/userhome' component={UserHome}/>
    <Route path='/gallery' component={Gallery}/>
    <Route path='/about' component={About}/>
    <Route>
      <Error />
    </Route>
    </Switch>
    </UserContext.Provider>
    </div>
  );
}

export default App;