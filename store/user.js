const types = {
    LOADING: 'LOADING',
    FAILURE: 'FAILURE',
    SUCCESS: 'SUCCESS'
}

export const actionCreators = {
    loading: () => ({ type: types.LOADING }),
    failure: () => ({ type: types.FAILURE }),
    success: (data) => ({ type: types.SUCCESS, payload: data })
}


export const initialState = {
    loading: false,
    error: false,
    users: []
}

export const reducers = (state, action) => {

    switch(action.type)
    {
        case types.LOADING:
            return {
                ...state,
                loading: true,
                error: false 
            }

        case types.FAILURE:
            return {
                ...state,
                loading: false,
                error: true 
            }
        
        case types.SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                users: action.payload
            }

        default :
        return state;
    }

}