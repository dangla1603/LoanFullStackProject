import React,{useState,useEffect} from 'react'
import './style/HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Col, Row, Button, Card, Form, InputGroup, FormControl} from 'react-bootstrap'

function Firstbody() {

    //TODO:
    // 1. Create 2 divs inside firstBody div to seperate between the message the morgate rate box
    //      _ Make sure they are flex, so when you minimize or resize the web it will automatically resize the divs
    // 2. Make card's div and message's div flex as well
    // 3. Modify .css file to make firs body look nicer.

    const initialValues = {loan: "", property: "", zip: ""};
    const [formValues, setFormValues]= useState(initialValues);
    const [formErrors, setFormErrors]= useState({});
    const [isSubmit,setIsSubmit]= useState(false);

    // This function will handle inputs Loan Amount , Property & Zipcode
    const handleChange = (e) => {
        const{name,value} = e.target;
        setFormValues({...formValues, [name]: value})
        
    }

    //This function will submit the form and check if each field is empty and return error message
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        
    }

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    }, [formErrors])


    // This function is used to validate data from input field
    // if field is empty, print the message
    // TODO: add const regex and add more conditions for each field
    const validate = (values) => {
        const errors= {};
        
        if(!values.loan){
            errors.loan = "Loan amount is required";
        }
        if(!values.property){
            errors.property = "Property value is required";
        }
        if(!values.zip){
            errors.zip = "ZIP code is required";
        }
        return errors;
    }
  return (
    <div className='body-container'>
        <Container id='firstBody'> 
            <div className='row center'>
                <div className='col-md-5 col-sm-12'>
                    <h1 class='first-text'>Relax,And Let us get you better deal</h1>
                    <p style={{fontSize:'20px'}}> Mortgage expert in refinance, loan purchase</p>
                    <Button variant="warning" size ='lg'>Start Application</Button>
                </div>
                <div className='col-md-7 col-sm-12'>
                        <Card className='card' border='white'>
                            <Card.Header style={{backgroundColor:'#686A6C', fontSize:'1.25rem'}} className='text-center text-uppercase text-light'>
                                Mortgage Rates
                            </Card.Header>
                            <Form onSubmit={handleSubmit}>
                                <Card.Body bg='light'>                       
                                    <Row>
                                        <Col className='col-sm-6'>
                                            <Form.Label className='text-light'>Loan Amount</Form.Label>
                                            <InputGroup className='mb-4'>
                                                <InputGroup.Text>$</InputGroup.Text>
                                                <FormControl type="loan"name="loan"placeholder ="Enter Amount" value={formValues.loan} onChange={handleChange}>
                                                </FormControl>
                                            </InputGroup>
                                            <p style={{color: 'red'}}>{formErrors.loan}</p>
                                        </Col>
                                        <Col className='col-sm-6'>
                                            <Form.Label className='text-light'>Property Value</Form.Label>
                                            <InputGroup className='mb-4'>
                                                <InputGroup.Text>$</InputGroup.Text>
                                                <FormControl name="property"placeholder ="Enter Value" value={formValues.property} onChange={handleChange}>
                                                </FormControl>
                                            </InputGroup>
                                            <p style={{color: 'red'}}>{formErrors.property}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='col-sm-6'>
                                            <Form.Label className='text-light'>Loan Purpose</Form.Label>
                                            <Form.Select className='mb-4'>
                                                <option value='refineL'>Refine - Lower Rate/Payments</option>
                                                <option value='refineC'>Refine - Cash out</option>
                                                <option value='purchase'>Purchase Mortgage</option>
                                            </Form.Select>
                                        </Col>
                                        <Col className='col-sm-6'>
                                            <Form.Label className='text-light'>Zip Code</Form.Label>
                                            <InputGroup className='mb-4'>
                                                <InputGroup.Text>Zip</InputGroup.Text>
                                                <FormControl name="zip"placeholder ="Zip Code" value={formValues.zip} onChange={handleChange}>
                                                </FormControl>
                                            </InputGroup>
                                            <p style={{color: 'red'}}>{formErrors.zip}</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Footer className='text-center text-uppercase d-grid'>
                                    <Button type="Submit"variant='warning' size='lg'>
                                        ✓ Get Quote
                                    </Button>
                                </Card.Footer>
                            </Form>
                        </Card>               
                </div>                   
            </div>  
        </Container>
    </div>   
  )
}

export default Firstbody