import React from 'react';
// import {Link,Route,BrowserRouter} from 'react-router-dom';
import './App.css'
// import Hunger from './Hunger'
import Get from './Get'
import Search from './SearchRedux'

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Restaurantdetails:[
                     {name:"Meghana Restaurant",cuisine:"south", rating:"5", cost:"80Rs.",image:"./dosa.jpeg" },
                     {name:"Hunger Restaurant",cuisine:"south", rating:"4.4", cost:"150Rs.",image:"./meal.jpeg" },
                     {name:"Get Restaurant",cuisine:"north", rating:"5", cost:"200Rs.",image:"./juice.webp" },
                     {name:"Wonderful Restaurant",cuisine:"north", rating:"5",cost:"100Rs.", image:"./ice.jpg" },
                     {name:"Eat box Restaurant",cuisine:"south", rating:"5",cost:"100Rs.", image:"./Biryani.jpg" },
                     {name:"Nadhana Restaurant",cuisine:"north&south", rating:"5",cost:"100Rs.", image:"./roti.png" },
                     {name:"Ashok Restaurant",cuisine:"north&south", rating:"3.2",cost:"100Rs.", image:"./rice.jpg" },
                     {name:"Nadhana Restaurant",cuisine:"north&south", rating:"5",cost:"100Rs.", image:"./idly.jpeg" },
                     {name:"Nadhana Restaurant",cuisine:"north&south", rating:"5",cost:"100Rs.", image:"./sweet1.jpg" },
             ]
        }
    }
    render(){
        return(
            <div>
               {/* <h3 className = "offer">FREE Shipping Order above 250Rs. </h3>  */}
               <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active"  data-interval="500">
                            <img className = "beginimage" src="./begin1.webp" alt="..."/>
                        </div>
                        <div class="carousel-item"  data-interval="1000">
                             <img className = "beginimage" src="./poori2.jpeg" alt="..."/>
                        </div>
                        <div class="carousel-item">
                              <img  className = "beginimage" src="./sweets.jpg" alt="..."/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>                      
                </div>
                <Search/>
           
                <React.Fragment>
                
                   {this.state.Restaurantdetails.map((item) =><Get homedata={item}/>)} 
    

                </React.Fragment>
         </div>
                   
        )

    }
}