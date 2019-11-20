const ADD_CUSTOMER = "ADD_CUSTOMER";

const MEGHANA = "MEGHANA";

const addCustomer = user => {
    console.log("Adding customer");
    return{
        type:ADD_CUSTOMER,
        userName: user.name,
        userEmail: user.email,
        userPhoneNo: user.phoneNo,
        userCity: user.city
    };
};
export { addCustomer };


const meghana = item =>{
    return{
        type:MEGHANA,
        
    }
}