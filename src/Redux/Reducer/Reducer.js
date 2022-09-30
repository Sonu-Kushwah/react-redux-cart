const inzilition ={
    carts:[]
}

export const cartReducer = (state=inzilition,action) => {
    switch(action.type){
        case"ADD_CART":
        const itemindex = state.carts.findIndex((items)=>items.id === action.payload.id);
        if(itemindex >= 0){
            state.carts[itemindex].qnty+=1
        }else{
            const temp = {...action.payload,qnty:1 }
        
         return{
            ...state, 
            carts: [...state.carts, temp]
         }
         
        }
         case "RMV_CART":
            const data = state.carts.filter((el)=>el.id !== action.payload);
            return {
                ...state,
                carts : data
            }

            //decrement
            case "DEC_ONE":
        const itemindex_dec = state.carts.findIndex((items)=>items.id === action.payload.id);
        if(state.carts[itemindex_dec].qnty >=1){
            const dltitem = state.carts[itemindex_dec].qnty -= 1
            console.log(dltitem)
            return {
                ...state,
                carts:[...state.carts]
            }
            // - pr click karne pr 1 value hone pr home pege pr jane ke liye code
        }else if(state.carts[itemindex_dec].qnty ===1){
            const data = state.carts.filter((el)=>el.id !== action.payload);
            return {
                ...state,
                carts : data
        }
    }

          
           default:
            return state
    }
}