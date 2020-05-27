import React from 'react'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Result = (props) => {
    const state = useSelector(state => state)
    const items = []
    for (var i = 0; i < state.questions.length; i++) {
        items.push(<li key={i}>{state.questions[i].correct_answer}</li>)
    }

    return (
        <Row>
            <h3>Result:</h3>
            <ul>
                {props.myAnswers.map((result, index) => {
                    if (result === state.questions[index].correct_answer) {
                        return (
                            <li key={index} className='text-success'>{result}</li>
                        )
                    } else {
                        return (
                            <li key={index} className='text-danger'>{result}</li>
                        )
                    }
                }
                )}
            </ul>
            <ul className='ml-5'>
                {items}
            </ul>
        </Row>
    )
}

export default Result