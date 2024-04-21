import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function modulePage() {
  const data = [{name: 'Голос', state: true, module: 'voice'}, {name: 'Слух', state: false, module: 'slux'}]
  return (
    <>
    <Container>
       <div style={{marginTop: '100px'}}>
           <Row style={{gap: '30px', justifyContent: 'center'}}> 
               {data.map((item, index) => (
                  item.state === true ? ( <Col  lg={3} as={Link} to={`module/${item.module}`}  key={index} style={{width: '300px', height: '300px', border: '2px solid black', padding: '100px', textAlign: 'center', fontSize: '25px', textDecoration: 'none', color: '#2300d5'}}>
                  <p>{item.name}</p>
                </Col>) : ( <Col  lg={3} as={Link} key={index} style={{width: '300px', height: '300px', border: '2px solid black', padding: '100px', textAlign: 'center', fontSize: '25px', textDecoration: 'none', color: '#2300d5'}}>
                <p>{item.name}</p>
                <span>Разработке....</span>
              </Col>)
               ))}
           </Row>
       </div>
    </Container>
   </>
  )
}
