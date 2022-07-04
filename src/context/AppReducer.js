export default function AppReducer (state , action) {
    switch (action.type){
        case 'DELETE_TRANSACTION' :
            return {
                ...state ,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION' :
            // undo comment when working on database
            // console.log(action.payload)
            return {
                ...state ,
                transactions: [action.payload ,...state.transactions]
            }
        default:
            return state
    }
}


