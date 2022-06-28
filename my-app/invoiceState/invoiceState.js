
import {invoiceReducer} from './invoiceReducer'
import {useReducer} from 'react'
import InvoiceContext from './InvoiceContext'

const InvoiceState =props =>{
    
let initialState = {
    name:'', 
    dueDate:'', 
    grossAmount:'',
    billNo:'',
    billDate:'', 
    lineItem:[],
    gstAmount:'', 
    netAmount:'', 
    notes:'',
    status:''
}
const[state, dispatch] = useReducer(invoiceReducer,initialState)

const AddItem =() =>{
    dispatch({
        type:'ADD_ITEM',
        payload:newItem
       })
}

const PostInvoice=()=>{
    dispatch({
        type:'ADD_INVOICE',
        payload:newInvoice
    })}

    return(
    <InvoiceContext.Provider
    value={{
        }}>
        {props.children}
    </InvoiceContext.Provider>)
    }


    export default InvoiceState;