import React from 'react'
import { Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { selectAnswer } from './Actions'

const Answer = (props) => {
    const dispatch = useDispatch()
    return (
        <Col className='mb-3 d-flex justify-content-center'>
            <Button block size='lg' className='btn btn-secondary' onClick={() => dispatch(selectAnswer(props.answer, props.index))}>{props.answer}</Button>
        </Col>
    )
}

export default Answer