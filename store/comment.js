const types = {
    LOADING: 'LOADING',
    FAILURE: 'FAILURE',
    SUCCESS: 'SUCCESS'
}

export const actionCreators = {
    loading: () => ({ type: types.LOADING }),
    failur: () => ({ type: types.FAILURE }),
    success: (data) => ({ type: types.SUCCESS, payload: data })
}

export const initialState = {
    loading: false,
    error: false,
    comments: []
}

export function reducer(state, action) {
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
                comments: action.payload
            }

        default:
            return state;
    }
}