import React from 'react';
import { addCustomer } from "./redux/action";

import { connect } from "react-redux";

 class SignRedux extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            phoneNo:"",
            city:""
        }
    }
    handleChange =(event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleClick = () =>{
        let obj = {
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phoneNo,
            city:this.state.city
        };
        this.props.add(obj);
    }
    render(){
        console.log(this.props, "state =",this.state)
        return(
            <div>
                <div className = "display">
                
                        Name:<input type = "text" name = "name"
                        value = {this.state.name}
                        onChange={(event)=>{
                            this.handleChange(event)
                        }}
                        /><br/><br/>
                        Email Id:<input type = "text" name = "email"
                        value = {this.state.email}
                        onChange = {(event) => {
                            this.handleChange(event)
                        }}
                        /><br/><br/>
                        Phone No:<input type = "text" name = "phoneNo"
                        value = {this.state.phoneNo}
                        onChange = {(event) =>{
                            this.handleChange(event)
                        }}
                        /><br/><br/>
                        City:<input type = "text" name = "city"
                        value = {this.state.city}
                        onChange = {(event) =>{
                            this.handleChange(event)
                        }}
                        /><br/><br/>
                    
                        <button onClick = {() =>{
                            this.handleClick()
                        }}>
                          Sign In</button>
                    
                <h1>Sign in and get notifications</h1>
                <img src = "./sign.jpg"/>
            </div>
            {this.props.addList.map (user => {
                return(
                    <div key = {user.userPhoneNo}>
                    {`${user.userName} ${user.userEmail} ${user.userPhoneNo} ${user.userCity}`}
                    </div>
                )
            })}
        </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("map state is called")
    return{
        addList:state.addList
    };  
};

const mapDispatchToProps = dispatch => {
    return{
        add:user =>dispatch(addCustomer(user))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps  
)(SignRedux);
