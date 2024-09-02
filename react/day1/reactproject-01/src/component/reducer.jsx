import React from "react";

function reducer(){
    const initialstate ={
        count :0
    }
    const reducer = (state,action)=>{
        switch(action.type){
            case"increment":
        
        return {
            count:state.count+action.payload
        }
        case"Incrementbyfive":
        default:
            return 'invalid action'
    }}
    useReducer(reducer,initialstate)
    return(
        <div>
            <p> {state.count}</p>
            <button onclick={handleIncrement}>increase</button>
            <button onclick={handleIncrement}>decrease</button>
            <button>reset</button>

        </div>
    )
}

export default reducer