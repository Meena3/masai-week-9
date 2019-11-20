import React from 'react';

export default class AddRestaurant extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            cuisine:"",
            location:"",
        
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value});
    }
    handleClick(event){
        alert('Your selected Restaurant is:' + this.state.value);
        alert('Allow to get your location');
        event.preventDefault();
        // if({props.state.value} == "meghana"){

        // }
    }  

    render(){
        return(
            <div>
                <img className = "beginimage" src = "./addimage.jpg"/>
                <div className = "search">
                    <h3> <b>Add Restaurant & get Profit</b></h3>
                    <i>Restaurant Name:</i><input type = "text" name = "name" 
                    value = {this.state.name}
                    onChange = {(event) => {this.handleChange(event)}}
                    /><br/><br/>
                    <i>Cuisine </i><input type = "text" name = "cuisine" value = {this.state.cuisine}/><br/><br/>
                    <i>Location</i><input type = "text" name = "location" value = {this.state.location}/><br/><br/>
                    <button className = "appear" onClick = {(event) => {this.handleClick(event)}}>Add </button>
                </div>  
            </div>
        )
    }
}