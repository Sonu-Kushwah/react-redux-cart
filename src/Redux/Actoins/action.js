  export let ADD = (item) => {
    return{
        type: "ADD_CART",
        payload: item
    }
}
export default ADD;


//remove data
export let DLT = (id) => {
    return{
        type: "RMV_CART",
        payload: id
    }
}
//decment data
export const DEC =(iteam) => {
    return{
        type: "DEC_ONE",
        payload:iteam
    }
}



