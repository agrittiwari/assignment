import React from 'react'
import Style from './List.module.css'

export const ListItem = (props) => {
const {invoice} = props
console.log(invoice)
  return (
  <div>
    <ul className={Style.row}>
        <li><strong>1</strong></li>
        <li>{invoice.name}</li>
        <li>{invoice.billNo}</li>
        <li>{invoice.billDate.slice(0, 10)}</li>
        <li>{invoice.netAmount}</li>
        <li>{invoice.status}</li>
        <li><button>Show this bill </button></li>
    </ul>    
</div>)
}


export default ListItem