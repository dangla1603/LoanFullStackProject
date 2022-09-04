import React from 'react'
import './Firstbody.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Col, Row, Button, Card, Form, InputGroup, FormControl} from 'react-bootstrap'

function Firstbody() {

    //TODO:
    // 1. Create 2 divs inside firstBody div to seperate between the message the morgate rate box
    //      _ Make sure they are flex, so when you minimize or resize the web it will automatically resize the divs
    // 2. Make card's div and message's div flex as well
    // 3. Modify .css file to make firs body look nicer.
    // TD -- I'll take a look into 2nd body with Scheiman Guide
    // testing bot 
  return (
    <div className='body-container' id='firstBody'> 
        <div class='center'>
            <h1 class='first-text'>Relax,And Let us get you better deal</h1>
            <p> Mortgage expert in refinance, loan purchase</p>
            <Button>Start Application</Button>
        </div>
        <Container className='auto-fit'>
            <Form>
                <Card bg='dark' border='dark' style={{width: '36rem', height:'23rem'}}>
                    <Card.Header className='text-center text-uppercase text-light'>
                        Mortgage Rates
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Form.Label className='text-light'>Loan Amount</Form.Label>
                                <InputGroup className='mb-4'>
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <FormControl placeholder ="Enter Amount">
                                    </FormControl>
                                </InputGroup>
                            </Col>
                            <Col>
                                <Form.Label className='text-light'>Property Value</Form.Label>
                                <InputGroup className='mb-4'>
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <FormControl placeholder ="Enter Value">
                                    </FormControl>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label className='text-light'>Loan Purpose</Form.Label>
                                <Form.Select className='mb-4'>
                                    <option value='refineL'>Refine - Lower Rate/Payments</option>
                                    <option value='refineC'>Refine - Cash out</option>
                                    <option value='purchase'>Purchase Mortgage</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label className='text-light'>Zip Code</Form.Label>
                                <InputGroup className='mb-4'>
                                    <InputGroup.Text>Zip</InputGroup.Text>
                                    <FormControl/>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer className='text-center text-uppercase d-grid'>
                        <Button variant='success' size='lg' href="#">
                            ✓ Get Quote
                        </Button>
                    </Card.Footer>
                </Card>
                <Row className ="valueInput">
                    <Col>
                    </Col>
                </Row>
            </Form>
        </Container>  
    </div>
  )
}

export default Firstbody