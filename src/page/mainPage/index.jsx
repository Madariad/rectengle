import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function mainPage() {
const alfa = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'д', 'е']
  return (
    <>
     <Container>
        <div style={{marginTop: '100px'}}>
            <Row style={{gap: '30px', justifyContent: 'center'}}> 
                {alfa.map((item, index) => (
                    <Col lg={3} as={Link} to={`alfavit/${item}`}  key={index} style={{width: '300px', height: '300px', border: '2px solid black', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                      <p>{item}</p>
                    </Col>
                ))}
            </Row>
        </div>
     </Container>
    </>
  )
}
