const INITIAL_STATE = {
    credentials:[
        
        
    ]
}

const actualReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'ACTUAL_VALUE':
            console.log('actual',action.payload)

            return{
                ...state,
                credentials:action.payload
            }
            default: return state
    }
}
export default actualReducer;