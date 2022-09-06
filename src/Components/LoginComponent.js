import React from 'react'
import './style/LoginComponent.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaUserAlt,FaLock} from 'react-icons/fa'
import {Card, Form, InputGroup, Button} from 'react-bootstrap'


function Login() {
  return (
    <div className='login-container'>
      <Card style={{width:'25rem'}}>
          <Card.Header className='text-center'>Login</Card.Header>
          <Card.Body>
            <Form>
              <InputGroup className='mb-3' >
                <InputGroup.Text><FaUserAlt/></InputGroup.Text>
                <Form.Control aria-label='email' placeholder='Email'/>
              </InputGroup>
              <InputGroup className='mb-3'>
                <InputGroup.Text><FaLock/></InputGroup.Text>
                <Form.Control type='password' aria-label='password' placeholder='Password'/>
              </InputGroup>
              <a>Forgot password?</a>
              <Button size ='m'>Login</Button>
            </Form>
          </Card.Body>
      </Card>
    </div> 
  )
}

export default Login