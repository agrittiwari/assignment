import React from 'react'
import { useState } from 'react'
import InvoiceStyle from './Form.module.css'


export const Addinvoice = () => {
 
        const [ name, setName] = useState('')
        const [ dueDate, setDueData] = useState('')
        const [ grossAmount, setGrossAmount] =useState('')
        const [ billNo,setBillNo] = useState('')
        const [ billDate, setBillDate] = useState('')
        const [ lineItem, setLineItem] = useState([])
        const [ gstAmount, setgstAmount] = useState('')
        const [ netAmount, setNetAmount] = useState('') 
        const [ notes,setNotes] = useState('')
        const [ status , setStatus] = useState('')
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

 
    const onSubmit = () =>{
        ('https://rscdev.taxadda.com/api/invoice/add', {
            body:[newInvoice]
        })
 }

 
    return (
    <div className={InvoiceStyle.invoiceDiv}>
       <div className={InvoiceStyle.invoiceDiv1}>
        <form onSubmit={onSubmit}>
                <ul className={InvoiceStyle.entry}>
                <li>
                    <label>Name</label>
                    < input required name="name" value={name} onChange={()=>{}} placeholder='name' type="text"/>
                </li>
                <li>
                    <label>dueDate</label>
                    <input required name="dueDate" value={dueDate} onChange={()=>{}} placeholder='dueDate'/>
                </li>
                <li>
                    <label>Gross Amount</label>
                    <input required name="grossAmount" value={grossAmount} onChange={()=>{}} placeholder='grossAmount'/>
                </li>
                <li>
                    <label> Bill No.</label>
                    <input required name="billNo" value={billNo} onChange={()=>{}} placeholder='billNo'/>
                </li>
                <li>
                    <label> Bill Date </label>
                    <input required name="billDate" value={billDate} onChange={()=>{}} placeholder='billDate'/>
                </li>
                <li>
                    <label>GST Amount </label>
                    <input required name="gstAmount" value={gstAmount} onChange={()=>{}} placeholder='gstAmount'/>
                </li>
                <li>
                    <label> Net Amount</label>
                    <input required name="netAmout" value={netAmount} onChange={()=>{}} placeholder='netAmount'/>
                </li>
                <li>
                    <label> Notes</label>
                    <input required name="notes" value={notes} onChange={()=>{}} placeholder='notes'/>
                </li>
                <li>
                    <label>Status</label>
                    <input required name="status" value={status} onChange={()=>{}} placeholder='status'/>     
                </li>
               </ul>
        </form>
        </div> 
        <Item />
    </div>
  )
}

const Item =() =>{
    
    const[productName, setProductName] =useState('');
        const[ quantity, setQuantitu] = useState('')
            const[ price, setPrice] = useState('')
                const[ amount,setAmount] = useState('')
                    const[gstRate, setGstRate] = useState('')
    
  
  
    const onItemAdd =() =>{
    console.log('Item added')
     return ;
 }
    return( <div className={InvoiceStyle.itemDiv}>
        <div className={InvoiceStyle.itemForm}>
         <h3>Line Item Form</h3>
         <form onSubmit={onItemAdd}>
            <ul className={InvoiceStyle.ItemEntry}>
             <li>
             <label> Product Name</label>
             < input required name="productName" value={productName} onChange={(e)=>{setAmount(e.target.value)}} placeholder='productName' type="text"/>
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
                 <button className={InvoiceStyle.btn} onClick={()=>onItemAdd}>Add Item</button>
             </li>
            </ul>
             
         </form>
         </div> 
        <div><h4>Line Item Details</h4>
        {newLineItem.amount}
        {newLineItem.gstRate}
        {newLineItem.price}
        {newLineItem.productName}
        {newLineItem.quantity}
        </div>
     </div>)
}
