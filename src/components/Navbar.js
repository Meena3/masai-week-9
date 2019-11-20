import React from 'react';
// import ReactDOM from 'react-dom';
import {Link,Route,BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Location from './Location';
import Contact from './Contact';
import SignRedux from './SignRedux';
import Addcart from './Addcart';
import AddRestaurant from './AddRestaurant'
// import Chart from './Chart';
// import Search from './Search'

export default class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
            <nav class="navbar navbar-expand-lg navbar-dark bg-light">
                <Link clasName="nav" to="/home" >HomelyFood <span class="sr-only">(current)</span></Link>
                <Link className="nav" to ="/contact">Contact Us</Link>
                <Link className="nav" to = "/sign">Sign In</Link>
                <Link className="nav" to = "/location">Location</Link>
                <Link className = "nav" to = "/chart">Analysis</Link>
                <Link className = "nav" to = "/addcart">Addcart</Link>
                <Link className = "nav" to = "/addrestaurant">Add Restaurant</Link>
            </nav>
        
           {/* <Search/> */}
           <Route path = "/" exact component = {Home}></Route>
           <Route path = "/contact" component = {Contact}/>
           <Route path = "/sign" component = {SignRedux}/>
           <Route path = "/location" component = {Location}/>
           <Route path = "/addcart" component = {Addcart}/>
           <Route path = "/addrestaurant" component = {AddRestaurant}/>

           {/* {/* {/* <Route path = "/chart" component = {Chart}/> */}
                 </BrowserRouter>
            </React.Fragment> 

        )
    }
}
