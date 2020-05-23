import React from 'react'
import {Row, Col} from 'react-bootstrap'

const Question = (props) => {
    return(
        <Row className = 'mt-5 mb-3'>
            <Col className = 'd-flex justify-content-center'>
                <h3>{props.question}</h3>
            </Col>
        </Row>
    )
}

export default Question