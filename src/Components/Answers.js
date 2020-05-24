import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Answers = (props) => {
    const state = useSelector(state => state)
    if (props.type === 'multiple') {
        return (
            <>
                <Row className='mb-3'>
                    <Col className='d-flex justify-content-center'>
                        <Button className='btn btn-secondary'>{}</Button>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Button className='btn btn-secondary'>Answer 2</Button>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col className='d-flex justify-content-center'>
                        <Button className='btn btn-secondary'>Answer 3</Button>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Button className='btn btn-secondary'>Answer 4</Button>
                    </Col>
                </Row>
            </>
        )
    } else if (props.type === 'boolean') {
        return (
            <>
                <Row className='mb-3'>
                    <Col className='d-flex justify-content-center'>
                        <Button className='btn btn-secondary'>True</Button>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Button className='btn btn-secondary'>False</Button>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Answers
