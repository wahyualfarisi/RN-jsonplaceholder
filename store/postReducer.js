const types = {
   LOADING: 'LOADING',
   SUCCESS: 'SUCCESS',
   FAILURE: 'FAILURE'
}

export const actionCreators = {
    loading: () => ({ type: types.LOADING }),
    success: (data) => ({ type: types.SUCCESS, payload: data }),
    failure: () => ({ type: types.FAILURE })
}

export const initialState = {
    loading: false,
    error: false,
    posts: []
}

export const postReducers = (state, action) => {

    switch(action.type)
    {
        case types.LOADING:
            return {
                ...state,
                loading: true 
            }

        case types.SUCCESS:
            return {
                ...state,
                loading:false,
                error: false,
                posts: action.payload 
            }

        case types.FAILURE:
            return {
                ...state,
                loading: false,
                error: true 
            }
            
        default: 
        return state;
    }

}