import React from 'react';

const get = (props) =>{
    if(props.name ==="meghana"){
        
    }
}


export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:""
        };
    }
    handleChange(event){
        this.setState({value:event.target.value});
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
                {/* <form onSubmit = {(e) =>this.handleSearch(e) }> */}
                    <div className = "search">
                       <h3> <b>Search for Restaurants</b></h3>
                        <select value = {this.state.value} onChange = {(e) => this.handleChange(e)}>
                            <option value = "meghana">Meghana Restaurants</option>
                            <option value = "hunger">Hunger Restaurants</option>
                            <option value = "get">Get Restaurants</option>
                            <option value = "wonderful">Wonderful Restaurants</option>
                            <option value = "eatbox">Eat Box Restaurants</option>
                        </select><br/><br/>
                        <button className = "appear" onClick = {(event) => {this.handleClick(event)}}>Search</button>
                    </div>
                    {/* <input type = "submit" value = "Search"/> */}
                {/* </form> */}
            </div>
        )
    }
}