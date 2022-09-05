import React from 'react'
import './shared/HomePage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Col, Row, Image, Card, Form, FormControl, InputGroup, Button} from 'react-bootstrap'

function Login() {
  return (
    <div className='body-container'>
        <div>
          <Card style={{width:'20rem'}}>
              <Card.Header className='text-center'>Login</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Label>User Name</Form.Label>
                  <InputGroup className='mb-3'>
                    <Form.Control aria-label='userName'/>
                  </InputGroup>
                  <Form.Label>Password</Form.Label>
                  <InputGroup className='mb-3'>
                    <Form.Control aria-label='password'/>
                  </InputGroup>
                  <Button size ='m'>Login</Button>
                </Form>
              </Card.Body>
              <Card.Footer>
                <Button size='sm'>Forgot Password?</Button>
              </Card.Footer>
          </Card>
        </div>
    </div>
  )
}

export default Login