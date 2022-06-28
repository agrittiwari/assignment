import InvoiceState from '../invoiceState/invoiceState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <InvoiceState>
    <Component {...pageProps} />
  </InvoiceState>
  )
}

export default MyApp
