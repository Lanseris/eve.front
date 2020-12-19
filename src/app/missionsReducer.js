//actions and reducer in one file

const initialState = {
    missions:[]
}

export const ActionTypes = {
    SET_MISSIONS: 'SET_MISSIONS'
}

export const ActionCreators = {
    setMissions: payload =>({type: ActionTypes.SET_MISSIONS, payload})
}

//reducer
export default (state = initialState, action) =>{
    switch(action.type){
        case ActionTypes.SET_MISSIONS:
            return{...state, missions: [...action.payload]};
            default:
                return state;
    }
}