import React from 'react'
import {Col, Row, Button} from 'react-bootstrap'

const Answers = (props) => {
    if(props.type === 'multiple'){
        return(
            <>
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
            </>
        )
    }else if(props.type === 'boolean'){
        return(
            <>
                <Row className = 'mb-3'>
                    <Col className = 'd-flex justify-content-center'>
                        <Button className = 'btn btn-secondary'>True</Button>
                    </Col>
                    <Col className = 'd-flex justify-content-center'>
                        <Button className = 'btn btn-secondary'>False</Button>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Answers
