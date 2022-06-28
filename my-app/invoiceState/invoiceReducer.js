export const invoiceReducer =(state, action) =>{
    switch (action.type) {
        case 'ADD_INVOICE':{
            return {
                ...state, ...action.payload,
                lineItem: state.lineItem,
            }
        }
            break;
        case 'ADD_ITEM':{
            return {
                ...state,
                lineItem:[action.payload, ...state.lineItem]
            }   
            }
            break;
        default:
            break;
    }
 }