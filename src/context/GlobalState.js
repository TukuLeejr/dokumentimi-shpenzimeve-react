import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

//Initial state (Qitu i shtijna transaksinet nese dojna mu kon disa nfillim statike)
const initialState = {
    transactions: []
}


//Create context
export const GlobalContext = createContext(initialState);


//Provider component qe me mujt krejt files tjera me pas qasje te GlobalState

    export const GlobalProvider = ({children}) => {
        const [state, dispatch] = useReducer(AppReducer, initialState);




        //Actions that make calls to our Reducer
        function deleteTransaction(id) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }

             function addTransaction(transaction) {
                 dispatch({
                    type: 'ADD_TRANSACTION',
                    payload: transaction
                });
             }


        return (<GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>

        );
    }