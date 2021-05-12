const INITIAL_STATE = {
    inputs:[
        
        
    ]
}

const givenReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'ON_SUBMIT':
            console.log('given ',action.payload)
            return{
                ...state,
                inputs:action.payload
            }
            default: return state
    }
}
export default givenReducer;