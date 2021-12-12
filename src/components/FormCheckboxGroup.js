import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FormInput from './FormInput.js';
import { titleize, addClass, addInputName } from '../helpers';


function FormCheckboxGroup({options, name, className, onChange}) {

  return (
    <Row className="form-checkbox-group">
      {
        options.map((d) => (
          <Col sm="4" md="3" lg="2" key={d}>
              <FormInput
                className={addClass(className)}
                type="checkbox"
                name={addInputName(name, d)}
                label={titleize(d)}
                onChange={onChange}
              />
          </Col>
        ))
      }
    </Row>
  )
}

export default FormCheckboxGroup;