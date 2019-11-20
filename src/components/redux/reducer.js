
const ADD_CUSTOMER = "ADD_CUSTOMER";

const initState = {
    addList :[]
}

const reducer = (state= initState,action) =>{
    switch(action.type){
        case ADD_CUSTOMER:
            console.log("ADD item is called");
            let temp= {
                userName: action.userName,
                userEmail: action.userEmail,
                userPhoneNo: action.userPhoneNo,
                userCity: action.userCity 
            } 
            return{
                addList: [...state.addList, temp]
            };
            default :
            return state;
    }
}
export default reducer;