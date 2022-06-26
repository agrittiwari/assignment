// div for the total Invoice


import React from 'react'
import Style from './Invoice.module.css'
const Invoice = (props) => {
  const {_id,  name,  dueDate, billNo,  billDate,  lineItem,  grossAmount,  gstAmount,  netAmount,  notes,  status,  createdAt,  updatedAt } =props.invoice;
    return (
    <div className={Style.invoice}>
        <div className={Style.div1}>
<strong>Name</strong><span>{name}</span>
        </div>
        <div className={Style.div2}>
           
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

export default Invoice
