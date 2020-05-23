import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { fetchQuestions } from './Actions'
import {useDispatch} from 'react-redux'

const Quiz = () => {
    const dispatch = useDispatch()
    dispatch(fetchQuestions())
    return(
        <>
        <Row className = 'mt-5 mb-3'>
            <Col className = 'd-flex justify-content-center'>
                <h3>Question</h3>
            </Col>
        </Row>
        <Row className = 'mb-3'>
            <Col className = 'd-flex justify-content-center'>
                <Button className = 'btn btn-secondary'>Answer 1</Button>
            </Col>
            <Col className = 'd-flex justify-content-center'>
                <Button className = 'btn btn-secondary'>Answer 2</Button>
            </Col>
        </Row>
        <Row className = 'mb-3'>
            <Col className = 'd-flex justify-content-center'>
                <Button className = 'btn btn-secondary'>Answer 1</Button>
            </Col>
            <Col className = 'd-flex justify-content-center'>
                <Button className = 'btn btn-secondary'>Answer 2</Button>
            </Col>
        </Row>
        <Row>
        <Col className = 'd-flex justify-content-center'>
            <Button>Next</Button>
        </Col>
        </Row>
        </>
    )
}

export default Quiz