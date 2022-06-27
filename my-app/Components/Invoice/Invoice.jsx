// div for the total Invoice
import React from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import Style from './Invoice.module.css'
const Invoice = (props) => {
  const {selectedInvoice} = props
   console.log(selectedInvoice)
     const {  name,  dueDate, billNo,  billDate,  lineItem,  grossAmount,  gstAmount,  netAmount,  notes,  status,  createdAt,  updatedAt } = selectedInvoice
    return (
    <div className={Style.invoice}>
        <div className={Style.div1}>
<strong>Name</strong><span>{name}</span>
        </div>
        <div className={Style.div2}>
          Invoice Bill Component
          
            {lineItem.map(item => <Item key={item._id} item={item}/>)}
             

        </div>
    </div>
  )
}

const Item =(props) =>{
    const {productName, quantity,
    price,
    amount,
    gstRate} =props.item
    return(
        <div className={Style.item}>
 <div className={Style.itemdiv1}>{productName}</div>
 <div className={Style.itemDiv2}>{price || amount}</div>
        </div>
       
    )
}

//For better UX

// const Invoice = (props) => {
//   const {selectedInvoice} = props
  
//   const {data, error} = useSWR('/api',fetcher) 
    
//     if (error) return <div>failed to load</div>
//     if (!data) return <div>loading...</div>
  
//     // render data
//     const {invoiceData} = data;
//     console.log(invoiceData.invoices)
//     const selectedBill = invoiceData.invoices.find(bill=> bill._id ===selectedInvoice);
//     console.log(selectedBill)
    
    
//     // const {  name,  dueDate, billNo,  billDate,  lineItem,  grossAmount,  gstAmount,  netAmount,  notes,  status,  createdAt,  updatedAt } = selectedBill
//     return (
//     <div className={Style.invoice}>
//         <div className={Style.div1}>
// <strong>Name</strong><span>{name}</span>
//         </div>
//         <div className={Style.div2}>
//           Invoice Bill Component
//            {/* <h2>{name}</h2>
//                 {lineItem.map(item => <Item key={item._id} item={item}/>)}
//              */}

//         </div>
//     </div>
//   )
// }
export default Invoice
