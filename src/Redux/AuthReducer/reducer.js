import { Action } from "@remix-run/router"
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontypes"



const initialState={
    isAuth:false,
    token:null,
    loading:false,
    error:false
}

const reducer=(state=initialState,action)=>{
    const {payload,type}=action
    switch(type){

        case LOGIN_REQUEST:
            return {...state,loading:true}
        case LOGIN_SUCCESS:
            return {...state,token:payload}
        case LOGIN_FAIL:
            return {...state,error:true}        
        default:
        return state
    }
}

export{reducer}