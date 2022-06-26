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
    <div>
        <Heading/>
        {invoiceData.invoices.map(invoice => <ListItem key ={invoice._id} invoice={invoice}/>)}
        
    <h2>{data.msg}</h2>

    </div>
  )
}

const Heading = () =>{
    return(
        <div>
            <ul className={Style.row}>
                <li>S No.</li>
                <li>Name</li>
                <li>Bill no.</li>
                <li>Bill Date</li>
                <li>Net Amount</li>
                <li>Status</li>
                <li> Bill Details</li>
            </ul>
        </div>
    )
}