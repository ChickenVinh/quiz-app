import React, {useEffect} from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap'
import { fetchQuestions } from './Actions'
import { useDispatch , useSelector } from 'react-redux'
import DotLoader from 'react-spinners/DotLoader'

const Quiz = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(() => {
        dispatch(fetchQuestions())
    }, [])

    if(state.loading === true){
        return(
            <Container className = 'mt-5 d-flex justify-content-center'>
                <DotLoader
                    color = {'DodgerBlue'}
                />
            </Container>
        )
    }else if(state.loading ===false){
        return(
            <Container>
            <Row className = 'mt-5 mb-3'>
                <Col className = 'd-flex justify-content-center'>
                    <h3>Questions</h3>
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
            </Container>
        )
    }
}

export default Quiz