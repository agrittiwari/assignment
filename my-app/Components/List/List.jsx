import React from 'react'
import ListItem from './ListItem'
import fetcher from '../../lib/fetcher'
import useSWR from 'swr'
import Style from './List.module.css'

export const List = () => {
    const {data, error} = useSWR('/api',fetcher) 
    
    
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
  
    // render data
    const {invoiceData} = data;
  return (
    <div className={Style.bg}>
        <Heading/>
        {invoiceData.invoices.map(invoice => <ListItem key ={invoice._id} invoice={invoice}/>)}
        
    <h2>{data.msg}</h2>

    </div>
  )
}

const Heading = () =>{
    return(
        <div style={{backgroundColor:"#222"}}>
            <ul className={Style.headRow}>
                <li><strong>S No.</strong></li>
                <li><strong>Name</strong></li>
                <li><strong>Bill no.</strong></li>
                <li><strong>Bill Date</strong></li>
                <li><strong>Net Amount</strong></li>
                <li><strong>Status</strong></li>
                <li><strong> Bill Details</strong></li>
            </ul>
        </div>
    )
}