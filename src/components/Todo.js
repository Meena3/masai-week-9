import React from "react";

export default class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todo:[],
            input:""
        }
    }
    handleAdd = () => {
        console.log("this.state.input");
        if(this.state.todo.length !==0){
            var len = this.state.todo.length;
            var id = this.state.todo[len-1].id+1
        }
        else{
            var id =1
        }

        this.setState({
            todo:[...this.state.todo,{
                name:this.state.input,
                id:id,
                status:false
            }]
        })
    }
    render(){
        return(
            <div></div>
        )
    }
}