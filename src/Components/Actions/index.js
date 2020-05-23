export const FETCH_QUESTIONS_BEGIN = 'FETCH_QUESTIONS_BEGIN'
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS'
export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR'

export const fetchQuestionsBegin = () => ({
    type: FETCH_QUESTIONS_BEGIN
})

export const fetchQuestionsSuccess = (payload) => ({
    type: FETCH_QUESTIONS_SUCCESS,
    payload
})

export const fetchQuestionsError = (payload) => ({
    type: FETCH_QUESTIONS_ERROR,
    payload
})

export function fetchQuestions(){
    return dispatch => {
        dispatch(fetchQuestionsBegin())
        return fetch('https://opentdb.com/api.php?amount=10')
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchQuestionsSuccess(json.results))
            })
            .catch(error => dispatch(fetchQuestionsError(error)))
    }
}

//handle HTTP errors since fetch won't
function handleErrors(response){
    if(!response.ok){
        throw Error(response.statusText)
    }
    return response
}