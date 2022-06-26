// GET request

export default async function handler (req, res){
    try {
        const response = await fetch('https://rscdev.taxadda.com/api/invoice/list')
      const data = await response.json()
        if(data){
            // console.log(data)
            return res.json({
                msg:'Request made successfully',
                invoiceData:data})
        }
    } catch (err) {
        res.status(500).json({msg: err.message})
        console.error(err)
    }
}