import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { fetchQuestions } from './Actions'
import { useDispatch, useSelector } from 'react-redux'
import DotLoader from 'react-spinners/DotLoader'
import Question from './Question'
import Answers from './Answers'

const Quiz = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(() => {
        dispatch(fetchQuestions())
    }, [dispatch])

    if (state.loading === true) {
        return (
            <Container className='mt-5 d-flex justify-content-center'>
                <DotLoader
                    color={'DodgerBlue'}
                />
            </Container>
        )
    } else if (state.loading === false) {
        return (
            <Container>
                <Question question={state.questions[0].question} />
                <Answers type={state.questions[0].type} />
            </Container>
        )
    }
}

export default Quiz