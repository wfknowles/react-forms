import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../style.css'

function FormResponse ({ status, message }) {

  return(
    <Row className="form-response text-center">
      <Col>
        <div className={status}>
          { message }
        </div>
      </Col>
    </Row>
  )
}

export default FormResponse;