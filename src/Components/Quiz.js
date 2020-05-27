import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { fetchQuestions } from './Actions'
import { useDispatch, useSelector } from 'react-redux'
import DotLoader from 'react-spinners/DotLoader'
import Question from './Question'
import Answers from './Answers'
import Result from './Result'

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
        if (state.index <= 9) {
            return (
                <Container>
                    <Question
                        question={state.questions[state.index].question}
                        index={state.index}
                    />
                    <Answers
                        index={state.index}
                        type={state.questions[state.index].type}
                        incorrect_answers={state.questions[state.index].incorrect_answers}
                        correct_answer={state.questions[state.index].correct_answer}
                    />
                </Container>
            )
        } else {
            return (
                <Container>
                    <Result
                        className='float-left'
                        myAnswers={state.selectedAnswer}
                    />
                </Container>
            )
        }
    }
}

export default Quiz