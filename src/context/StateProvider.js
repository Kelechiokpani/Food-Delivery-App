import React,{createContext, useContext, useReducer} from "react"

// using statecontext to set state {destrcture}
//  pass in reducer function and initialstate as props 
// pass in statecontext as children props
// export to index.js you is to wrap app.js
export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (

    <StateContext.Provider value ={useReducer(reducer, initialState )}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = ( )  => useContext(StateContext)