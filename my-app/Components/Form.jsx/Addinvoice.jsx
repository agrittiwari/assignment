import React from 'react'
import { useState, useReducer } from 'react'
import { invoiceReducer } from '../../invoiceState/invoiceReducer'
import InvoiceStyle from './Form.module.css'
import initialState from '../../invoiceState/invoiceState'

export const Addinvoice = () => {

    
 
    const[state, dispatch] = useReducer(invoiceReducer,initialState)

        const [ name, setName] = useState(initialState.name)
        const [ dueDate, setDueData] = useState(initialState.dueDate)
        const [ grossAmount, setGrossAmount] =useState(initialState.grossAmount)
        const [ billNo,setBillNo] = useState(initialState.billNo)
        const [ billDate, setBillDate] = useState(initialState.billDate)
        const [ lineItem, setLineItem] = useState(initialState.lineItem)
        const [ gstAmount, setgstAmount] = useState(initialState.gstAmount)
        const [ netAmount, setNetAmount] = useState(initialState.netAmount) 
        const [ notes,setNotes] = useState(initialState.notes)
        const [ status , setStatus] = useState(initialState.status)

       
        const [newItem, setNewItem] = useState({})
    let newInvoice ={
        name, 
        dueDate, 
        grossAmount,
        billNo,
        billDate, 
        lineItem,
        gstAmount, 
        netAmount, 
        notes,
        status 
    }

 console.log(lineItem)
//  const callback= newItem =>{
//     setNewItem(newItem)
//  }
    const onSubmit = async() =>{
        console.log('submit pressed')
        
        setLineItem([...lineItem, newItem])
        dispatch({
            type:'ADD_INVOICE',
            payload:newInvoice
        })

        try {
            const res = await fetch('https://rscdev.taxadda.com/api/invoice/add', {
                method: 'post',    
            body:[newInvoice]
            })
               const status=   await res.json()
         console.log(status)
            //    return res.status;    
        } catch (err) {
            console.error({msg: err.message})
        }
        
 }

 
    return (
    <div className={InvoiceStyle.invoiceDiv}>
        <div className={InvoiceStyle.itemDiv}>
            
        <Item  />
        {console.log(newItem)}
        {lineItem?.map((index,item)=>(<div key={index}> <h3>{item.productName}</h3>
        <li>{item.quantity}</li>{item.price}<li></li>{item.gstRate}<li>{item.amount}</li></div>))} 
         </div> 
       <div className={InvoiceStyle.invoiceDiv1}>
        <form onSubmit={onSubmit}>
                <ul className={InvoiceStyle.entry}>
                <li>
                    <label>Name</label>
                    < input required name="name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='name' type="text"/>
                </li>
                <li>
                    <label>Due Date</label>
                    <input required name="dueDate" value={dueDate} onChange={(e)=>{setDueData(e.target.value)}} placeholder='dueDate' type="date"/>
                </li>
                <li>
                    <label>Gross Amount</label>
                    <input required name="grossAmount" value={grossAmount} onChange={(e)=>{setGrossAmount(e.target.value)}} placeholder='grossAmount' type="number"/>
                </li>
                <li>
                    <label> Bill No.</label>
                    <input required name="billNo" value={billNo} type="number" onChange={(e)=>{setBillNo(e.target.value)}} placeholder='billNo'/>
                </li>
                <li>
                    <label> Bill Date </label>
                    <input required name="billDate" value={billDate} type="date" onChange={(e)=>{setBillDate(e.target.value)}} placeholder='billDate'/>
                </li>
                <li>
                    <label>GST Amount </label>
                    <input required name="gstAmount" value={gstAmount}  type="number" onChange={(e)=>{setgstAmount(e.target.value)}} placeholder='gstAmount'/>
                </li>
                <li>
                    <label> Net Amount</label>
                    <input required name="netAmout" value={netAmount} type="number" onChange={(e)=>{setNetAmount(e.target.value)}} placeholder='netAmount'/>
                </li>
                <li>
                    <label> Notes</label>
                    <input required name="notes" value={notes} type="text" onChange={(e)=>{setNotes(e.target.value)}} placeholder='notes'/>
                </li>
                <li>
                    <label>Status</label>
                    <input required name="status" value={status} type="text" onChange={(e)=>{setStatus(e.target.value)}} placeholder='status'/>     
                </li>
               </ul>
               <ul className={InvoiceStyle.entry}>
                <li>
                 <button className={InvoiceStyle.submitBtn} type="submit">Add Invoice</button>
             </li></ul>
        </form>
        </div>
       
        
    </div>
  )
}

const Item =(props) =>{
    
    const[state, dispatch] = useReducer(invoiceReducer,initialState.lineItem)

    const[productName, setProductName] =useState('');
    const[ quantity, setQuantity] = useState('')
    const[ price, setPrice] = useState('')
    const[ amount,setAmount] = useState('')
    const[gstRate, setGstRate] = useState('')



    let item = {
        productName, quantity, price, amount, gstRate
    }
  
    console.log(item)
 
    const onItemAdd =() =>{
       dispatch({
        type:'ADD_ITEM',
        payload:item
       })
        console.log('Item added')
    //   console.log(item)
        // props.onAdd(item)
       
        }
    return( 
        <div className={InvoiceStyle.itemForm}>
         <h3>Line Item Form</h3>
         <form onSubmit={onItemAdd}>
            <ul className={InvoiceStyle.ItemEntry}>
             <li>
             <label> Product Name</label>
             < input required name="productName" value={productName} onChange={(e)=>{setProductName(e.target.value)}} placeholder='productName' type="text"/>
             </li>
             <li>
             <label> Quantity</label>
             < input required name="quantity" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} placeholder='quantity' type="number"/>
             </li>
             <li>
             <label>Price</label>
             < input required name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='price' type="number"/>
             </li>
             <li>
             <label>Amount</label>
             < input required name="amount" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='amount' type="number"/>
             </li>
             <li>
             <label>GST Rate</label>
             < input required name="gstRate" value={gstRate} onChange={(e)=>{setGstRate(e.target.value)}} placeholder='gstRate' type="number"/>
             </li>
             <li>
                 <button className={InvoiceStyle.btn} type="submit">Add Item</button>
             </li>
            </ul>
         </form>
         <div><h4>Line Item Details</h4>
         {/* {console.log(item)} */}
        {/* {props.lineItem?.map((index,item)=>(<div key={index}> <h3>{item.productName}</h3>
        <li>{item.quantity}</li>{item.price}<li></li>{item.gstRate}<li>{item.amount}</li></div>))} */}
            </div>        
     </div>)
}
