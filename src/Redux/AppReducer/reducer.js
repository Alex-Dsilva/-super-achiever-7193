import { ERROR_DATA, GET_DATA, LOAD_DATA } from "./actiontypes"

const initialState={
    card:[],
    isLoading:false,
    isError:false
}

const reducer=(state=initialState,action)=>{
    const {payload,type} = action
    switch(type){
        case LOAD_DATA:
            return {...state,isLoading:true}
        case GET_DATA:
            return {...state,card:payload}
        case ERROR_DATA:
            return {...state,isError:true}        
        default:
            return state
    }


}

export{reducer}