// div for the total Invoice
import React from 'react'

import Style from './Invoice.module.css'
const Invoice = (props) => {
  const {selectedInvoice} = props
   console.log(selectedInvoice)
     const {  name,  dueDate, billNo,  billDate,  lineItem,  grossAmount,  gstAmount,  netAmount,  notes,    createdAt,  updatedAt } = selectedInvoice
    return (
    <div className={Style.invoice}>
      <div className={Style.bill}>
                <div className={Style.invoiceDate}>
                  <div className={Style.date}><strong>Date: </strong><span>{billDate.slice(0, 10)}</span></div>
                  <div className={Style.billNo}><p>Bill No.<strong>{billNo}</strong></p></div>
                </div>
                  <div className={Style.div1}>
          <strong>Name -</strong><span>{name}</span>
                  </div>
                  <div className={Style.div2}>     
                  {lineItem.map(item => <Item key={item._id} item={item}/>)}
                  </div>
                  <div className={Style.lowerSection}>
            <div className={Style.lowerDiv1of2}>
            <strong>Due Date: </strong><span>{dueDate.slice(0, 10)}</span>
            </div>
            <div className={Style.lowerDiv2of2}>
            <li><h6>Gross Amount</h6><span>{grossAmount}</span></li>
            <li><h6>GST Amount </h6><span>{gstAmount}</span></li>
            <li><h6>Net Amount </h6><span>{netAmount}</span></li>
            </div>
            </div>
            <div className={Style.notesDiv}>
            <p>Updated at: <span>{updatedAt.slice(0, 10)}</span></p>
            <p>Created at : <span>{createdAt.slice(0, 10)}</span></p>
          <p>Note : <span>{notes}</span></p>
            </div>
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
 <ul className={Style.itemdiv}>
  <li><strong>{productName}</strong></li>
  <li><p>{gstRate}(GST Rate)</p></li>
  <li><p>{quantity}</p></li> 
  <li><p>{price||amount}</p></li>
  </ul>
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
