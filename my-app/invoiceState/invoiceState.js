
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

const AddItem =(newItem) =>{
    dispatch({
        type:'ADD_ITEM',
        payload:newItem
       })
}

const PostInvoice=async (newInvoice)=>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }}
    try {
        dispatch({
        type:'ADD_INVOICE',
        payload:newInvoice
    })
        const res = await fetch('https://rscdev.taxadda.com/api/invoice/add', {
            method: 'POST',    
            config,
        Body:newInvoice
        })
           const status=   await res.json()
     console.log(status)
          
    } catch (err) {
        console.error({msg: err.message})
    }
}

    return(
    <InvoiceContext.Provider
    value={{AddItem, PostInvoice, state 
        }}>
        {props.children}
    </InvoiceContext.Provider>)
    }


    export default InvoiceState;