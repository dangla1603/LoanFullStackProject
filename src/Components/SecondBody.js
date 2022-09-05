import React from 'react'
import './Shared/HomePage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Col, Row, Image} from 'react-bootstrap'


function SecondBody() {
  return (
    <div className = 'secondbody-container'>
        <Container>
            <div className='secondbody-contaner-div'>
              <Row>
                <h1 className='font-weight-bold text-center text-uppercase text-warning'>Why Lock It Lending?</h1>
                <h4 className='text-center text-danger'>Scotsman Guide Ranking</h4>
                <hr/>
              </Row>
              <Row xs={2} md={4} lg={6}>
                <Col>
                    <a href='https://www.scotsmanguide.com/rankings/top-originators/2022/top-emerging-stars'
                      target ='https://www.scotsmanguide.com/rankings/top-originators/2022/top-emerging-stars'>
                      <Image src='/images/scotsman.png' rounded='true'/>
                    </a>                 
                </Col>
                <Col>
                    <a href='https://www.scotsmanguide.com/rankings/top-originators/2022/most-loans-closed'
                      target='https://www.scotsmanguide.com/rankings/top-originators/2022/most-loans-closed'>
                      <Image src='/images/scotsman.png' rounded='true' />
                    </a>
                </Col>
              </Row>
            </div>   
        </Container>
    </div>
  )
}

export default SecondBody