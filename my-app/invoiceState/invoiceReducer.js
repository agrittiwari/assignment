export const invoiceReducer =(state, action) =>{
    switch (action.type) {
        case 'ADD_INVOICE':{
            return {
                ...state, ...{
                    name:action.payload.name, 
                    dueDate:action.payload.dueDate, 
                    grossAmount:action.payload.grossAmount,
                    billNo:action.payload.billNo,
                    billDate:action.payload.billDate, 
                    lineItem:state.payload.lineItem,
                    gstAmount:action.payload.gstAmount, 
                    netAmount:action.payload.netAmount, 
                    notes:action.payload.notes,
                    status:action.payload.status
                }
            }
        }
            break;
        case 'ADD_ITEM':{
            return [
                ...state,
                 action.payload]
            }
            break;
        default:
            break;
    }
 }