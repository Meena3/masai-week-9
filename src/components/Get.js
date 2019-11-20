import React from 'react';
// import home from './home'
import './App.css'
const Get =(props)=>{
    return(
         <div>
            {/* <h3>{props.homedata.name}</h3>
            <p><b className = "rate">Ratings:{props.homedata.rating},<br/>Cost:{props.homedata.cost}</b></p>
            <img src = {props.homedata.image}/>  */}
            <div className="card-deck float-left display" >
                <div className="card ">
                     <h5 className = "head">{props.homedata.name}</h5>
                     <p className = "rate">Ratings:{props.homedata.rating}</p>
                        <p>price:{props.homedata.cost}</p>
                    <img  style = {{height:"300px", width:"400px"}}src={props.homedata.image}/>
                </div>
            </div>
        </div>
    
    // className = "display"
    // style = {{width:"900px", height:"400px"}}
    )
}
export default Get;

