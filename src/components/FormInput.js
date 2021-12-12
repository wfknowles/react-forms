import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { titleize, addClass } from '../helpers';
import '../style.css'

function FormInput (props) {

  const {

    className,
    variant,
    type,
    name,
    label,
    defaultValue,
    placeholder,
    onChange,
    selectOptions

  } = props;
  const standardInputTypes = [ "text", "tel", "email", "password", "search", "number"];

  const addMedia = (e) => {
    e.preventDefault();
    console.log('add media!');
  }

  const changeMedia = (e) => {
    e.preventDefault();
    console.log('submit media!');
  }

  const failQuietly = (v) => {
    return v || ""; 
  }

  return (
    <>
    {
      standardInputTypes.includes(type) && (

        <Form.Group className={addClass('form-group', failQuietly(className))}>

          {
            label && (
              <Form.Label htmlFor={failQuietly(name)}>
              {failQuietly(label)}
            </Form.Label>
            )
          }

          <Form.Control 
            type={failQuietly(type)} 
            name={failQuietly(name)} 
            defaultValue={failQuietly(defaultValue)} 
            placeholder={failQuietly(placeholder)} 
            onChange={onChange} 
          />

        </Form.Group>

      )
    }
    {
      type === 'select' && (
        <Form.Group className={addClass('form-group', className)}>
          <Form.Label htmlFor={name}>{label}</Form.Label>

          <Form.Select aria-label={placeholder} name={name} onChange={onChange}>
            <option value="">{placeholder}</option>
            {
              selectOptions.map(( option ) => (
                <option key={option} value={ option || ""} >{titleize( option )}</option>
              ))
            }
          </Form.Select>
        </Form.Group >
      )
    }
    {
      type === 'checkbox' && (
        <Form.Group className={addClass('form-group', className)}>
          <Form.Check type={type} name={name} label={label} onChange={onChange}/>
        </Form.Group >
      )
    }
    {
      type === 'textarea' && (

        <Form.Group className={addClass('form-group', failQuietly(className))}>

          <Form.Label htmlFor={failQuietly(name)}>
            {failQuietly(label)}
          </Form.Label>

          <Form.Control 
            as={failQuietly(type)} 
            rows={3}
            name={failQuietly(name)} 
            defaultValue={failQuietly(defaultValue)} 
            onChange={onChange}
          />

        </Form.Group >

      )
    }
    {
      type === 'media' && (
        <Form.Group className={addClass('form-group', className)}>
          <Form.Label htmlFor={name}>{label}</Form.Label>
          <Form.Control type="file" name={name} placeholder={placeholder} onChange={onChange} />
        </Form.Group >
      )
    }
    {
      type === 'hidden' && (
        <Form.Group className={addClass('form-group form-group-hidden', className)}>
          <Form.Control type="hidden" name={name} onChange={onChange} />
        </Form.Group >
      )
    }
    {
      type === 'submit' && (
        <Form.Group className={addClass('form-group form-group-hidden', failQuietly(className))}>
          <Button className="form-control" variant={failQuietly(variant)} type="submit">{failQuietly(label)}</Button>
        </Form.Group >
      )
    }
    </>
  )
}

export default FormInput;