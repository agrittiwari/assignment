import Head from "next/head";
import { Addinvoice } from "../Components/Form.jsx/Addinvoice";
import Navbar from "../Components/Navbar/Navbar";
import styles from '../styles/Home.module.css'

 export default function AddInvoice(){
    return(
        <div className={styles.container}>
        <Head>
        <title>AddInvoice - Tax Adda</title>
        <meta name="description" content="Add your invoice on Tax Adda" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        < main>
      <Navbar href={'/'} routeName={'Get all Invoices'}/>
      <Addinvoice/>
        </main>
        </div>
    )
 }