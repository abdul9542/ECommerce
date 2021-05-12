const INITIAL_STATE = {
    data:0
}

const dataReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'NAMED':
            console.log("data reducer", action.payload)
            return{
                ...state,
                data:action.payload
            }
            default: return state
    }
}
export default dataReducer;