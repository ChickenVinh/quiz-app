import{
    FETCH_QUESTIONS_BEGIN,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_ERROR
} from '../Actions'

const initialState = {
    questions: [],
    loading: true,
    error: null
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case FETCH_QUESTIONS_BEGIN:
            //Mark state as 'loading' to show spinner or smth
            //reset errors
            return{
                ...state,
                loading: true,
                error: null
            }
        case FETCH_QUESTIONS_SUCCESS:
            //set loading true
            //pull questions from fetch
            return{
                ...state,
                loading: false,
                questions: action.payload
            }
        case FETCH_QUESTIONS_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload.error,
                questions: []
            }
        default:
            return state
    }
}