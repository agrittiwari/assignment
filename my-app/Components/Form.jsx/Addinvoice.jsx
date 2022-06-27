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

       
        const [newItem, setNewItem] = useState({productName:'', quantity:'', price:'', amount:'', gstRate:''})
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
    const onSubmit = async() =>{
        console.log('submit pressed')
        setLineItem([...lineItem, newItem])
        try {
            const res = await fetch('https://rscdev.taxadda.com/api/invoice/add', {
                method: 'post',    
            body:[newInvoice]
            })
               const status=   await res.json()
         console.log(status)
               return res.status;    
        } catch (err) {
            console.error({msg: err.message})
        }
        
 }

 
    return (
    <div className={InvoiceStyle.invoiceDiv}>
        <div className={InvoiceStyle.itemDiv}>
            
        <Item newItem={newItem} setNewItem={setNewItem}/>
        {console.log(newItem)}
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
    
    const[productName, setProductName] =useState('');
    const[ quantity, setQuantity] = useState('')
    const[ price, setPrice] = useState('')
    const[ amount,setAmount] = useState('')
    const[gstRate, setGstRate] = useState('')

    
  
 
    const onItemAdd =() =>{
        console.log('Item added')
        props.setNewItem({
             productName, quantity, price, amount, gstRate
          })
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
         {console.log(props.newItem.productName)}
        {/* {props.lineItem?.map((index,item)=>(<div key={index}> <h3>{item.productName}</h3>
        <li>{item.quantity}</li>{item.price}<li></li>{item.gstRate}<li>{item.amount}</li></div>))} */}
            </div>        
     </div>)
}
