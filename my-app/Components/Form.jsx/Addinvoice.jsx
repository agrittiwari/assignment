import React from 'react'
import { useState, useContext } from 'react'
import InvoiceContext from '../../invoiceState/InvoiceContext'
import InvoiceStyle from './Form.module.css'

export const Addinvoice = () => {
    const invoiceContext = useContext(InvoiceContext)

    const { AddItem, PostInvoice, state } =invoiceContext
    return (
    <div className={InvoiceStyle.invoiceDiv}>
        <div className={InvoiceStyle.itemDiv}>      
        <Item  AddItem= {AddItem}  state={state}/>
      
         </div> 
       <RemainingForm PostInvoice={PostInvoice}/>
        
    </div>
  )
}

const Item =(props) =>{
    
     const [newItem, setNewItem] = useState({
        productName:'',
        quantity:'', 
        price:'',
        amount:'',
        gstRate:''
    })
    
    const onItemAdd =(e) =>{
        e.preventDefault()
        console.log(newItem)
        props.AddItem(newItem)
        console.log('Item added')
        setNewItem({  productName:'',
        quantity:'', 
        price:'',
        amount:'',
        gstRate:''})
        }
    return( 
        <div className={InvoiceStyle.itemForm}>
        
         <form onSubmit={onItemAdd}>
            <ul className={InvoiceStyle.ItemEntry}>
             <li>
             <label> Product Name</label>
             < input required name="productName" value={newItem.productName} onChange={(e)=>{setNewItem({...newItem,productName:e.target.value})}} placeholder='productName' type="text"/>
             </li>
             <li>
             <label> Quantity</label>
             < input required name="quantity" value={newItem.quantity} onChange={(e)=>{setNewItem({...newItem,quantity:e.target.value})}} placeholder='quantity' type="number"/>
             </li>
             <li>
             <label>Price</label>
             < input required name="price" value={newItem.price} onChange={(e)=>{setNewItem({...newItem,price:e.target.value})}} placeholder='price' type="number"/>
             </li>
             <li>
             <label>Amount</label>
             < input required name="amount" value={newItem.amount} onChange={(e)=>{setNewItem({...newItem,amount:e.target.value})}} placeholder='amount' type="number"/>
             </li>
             <li>
             <label>GST Rate</label>
             < input required name="gstRate" value={newItem.gstRate} onChange={(e)=>{setNewItem({...newItem,gstRate:e.target.value})}} placeholder='gstRate' type="number"/>
             </li>
             <li>
                 <input className={InvoiceStyle.btn} type="submit" value="Add Item"/>
             </li>
            </ul>
         </form>
         <div className={InvoiceStyle.addedItem}><h4>Line Item Details</h4>
         {console.log(props.state?.lineItem)}
        {props.state?.lineItem?.map((item,index)=>(<ul className={InvoiceStyle.ItemEntry}key={index}> 
        <li><strong>{item.productName}</strong></li>
        <li>{item.quantity}</li>
        <li>{item.price}</li>
        <li>{item.gstRate}</li>
        <li>{item.amount}</li>
        </ul>))}
            </div>        
     </div>)
}

const RemainingForm=(props)=>{
   
    const[invoiceStatus, setInvoiceStatus] = useState(false)

    const [newInvoice,setNewInvoice] = useState({
        name:'',  
        dueDate:'',  
        grossAmount:'',
        billNo:'',      
        billDate:'',        
        lineItem: props.state?.lineItem,
        gstAmount:'',
        netAmount:'',
        notes:'',     
        status:'', 
    }  )


const onSubmit = async(e) =>{
    e.preventDefault()
    console.log('submit pressed')
    props.PostInvoice(newInvoice);
    console.log('post invoice called')
    setNewInvoice({
        name:'',  
        dueDate:'',  
        grossAmount:'',
        billNo:'',      
        billDate:'',        
        lineItem: props.state?.lineItem,
        gstAmount:'',
        netAmount:'',
        notes:'',     
        status:'', 
    }  )
    setInvoiceStatus(true);    
}
  return( <div className={InvoiceStyle.invoiceDiv1}>
        <form onSubmit={onSubmit}>
                <ul className={InvoiceStyle.entry}>
                <li>
                    <label>Name</label>
                    < input required name="name" value={newInvoice.name} onChange={(e)=>{setNewInvoice({...newInvoice,name:e.target.value})}} placeholder='name' type="text"/>
                </li>
                <li>
                    <label>Due Date</label>
                    <input required name="dueDate" value={newInvoice.dueDate} onChange={(e)=>{setNewInvoice({...newInvoice,dueDate:e.target.value})}} placeholder='dueDate' type="date"/>
                </li>
                <li>
                    <label>Gross Amount</label>
                    <input required name="grossAmount" value={newInvoice.grossAmount} onChange={(e)=>{setNewInvoice({...newInvoice,grossAmount:e.target.value})}} placeholder='grossAmount' type="number"/>
                </li>
                <li>
                    <label> Bill No.</label>
                    <input required name="billNo" value={newInvoice.billNo} type="number" onChange={(e)=>{setNewInvoice({...newInvoice,billNo:e.target.value})}} placeholder='billNo'/>
                </li>
                <li>
                    <label> Bill Date </label>
                    <input required name="billDate" value={newInvoice.billDate} type="date" onChange={(e)=>{setNewInvoice({...newInvoice,billDate:e.target.value})}} placeholder='billDate'/>
                </li>
                <li>
                    <label>GST Amount </label>
                    <input required name="gstAmount" value={newInvoice.gstAmount}  type="number" onChange={(e)=>{setNewInvoice({...newInvoice,gstAmount:e.target.value})}} placeholder='gstAmount'/>
                </li>
                <li>
                    <label> Net Amount</label>
                    <input required name="netAmout" value={newInvoice.netAmount} type="number" onChange={(e)=>{setNewInvoice({...newInvoice,netAmount:e.target.value})}} placeholder='netAmount'/>
                </li>
                <li>
                    <label> Notes</label>
                    <input required name="notes" value={newInvoice.notes} type="text" onChange={(e)=>{setNewInvoice({...newInvoice,notes:e.target.value})}} placeholder='notes'/>
                </li>
                <li>
                    <label>Status</label>
                    <input required name="status" value={newInvoice.status} type="text" onChange={(e)=>{setNewInvoice({...newInvoice,status:e.target.value})}} placeholder='status'/>     
                </li>
               </ul>
               <ul className={InvoiceStyle.entry}>
                <li>
                 <button className={InvoiceStyle.submitBtn} type="submit">Add Invoice</button>
             </li></ul>
        </form>
        {invoiceStatus && <h1>Invoice Added</h1>}
        </div>)
}