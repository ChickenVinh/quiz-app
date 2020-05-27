import {
    FETCH_QUESTIONS_BEGIN,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_ERROR,
    SELECT_ANSWER
} from '../Actions'

const initialState = {
    index: 0,
    questions: [],
    loading: true,
    error: null,
    selectedAnswer: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS_BEGIN:
            //Mark state as 'loading' to show spinner or smth
            //reset errors
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_QUESTIONS_SUCCESS:
            //set loading true
            //pull questions from fetch
            return {
                ...state,
                loading: false,
                questions: action.payload
            }
        case FETCH_QUESTIONS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                questions: []
            }
        case SELECT_ANSWER:
            return {
                ...state,
                index: state.index + 1,
                selectedAnswer: [...state.selectedAnswer, action.payload]
            }
        default:
            return state
    }
}

export default rootReducer