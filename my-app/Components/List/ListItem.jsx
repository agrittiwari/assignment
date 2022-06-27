import React from 'react'
import { useState } from 'react'
import Invoice from '../Invoice/Invoice'
import Style from './List.module.css'

export const ListItem = (props) => {
const {invoice} = props
const [selected, setSelected] = useState({_id:null,show: false
})
// console.log(invoice)
// console.log(selected)
  return (
  <div>
    <ul className={Style.row}>
        <li><strong>1</strong></li>
        <li>{invoice.name}</li>
        <li>{invoice.billNo}</li>
        <li>{invoice.billDate.slice(0, 10)}</li>
        <li>{invoice.netAmount}</li>
        <li>{invoice.status}</li>
        <li><button onClick={()=> setSelected({_id:invoice._id, show:!selected.show})}>Show this bill </button></li>
    </ul>  
    {selected.show && <Invoice selectedInvoice={selected._id}/>}  
</div>)
}


export default ListItem