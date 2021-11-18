import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FormControl from './FormControl'
import { useState } from 'react'
const Register = ()=>{
  
    const [name, setName] = useState()
    
return(
    
    <Container>
        <Row>
            <Form>
            <h2 className = "mt-3">Registration</h2>
            <Col className="d-flex">
                <Form.Group className="mb-3 justify-content-center" controlId="name">
                    <Form.Label className="text-light mt-3"
                     value = {name}
                    onChange={((e)=>setName(e.target.value))}>Name</Form.Label>
                    <Form.Control required type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-1 justify-content-center" controlId="Surname">
                    <Form.Label className="text-light mt-3">Surname</Form.Label>
                    <Form.Control type="text" placeholder="Surname" />
                </Form.Group>
            </Col>
            <Col className="">
                <Form.Group className="mb-1 justify-content-center" controlId="email">
                    <Form.Label className="text-light mt-3">Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-1 justify-content-center" controlId="password">
                    <Form.Label className="text-light mt-3">Password</Form.Label>
                    <Form.Control type="password" min-length ="5" placeholder="password" />
                </Form.Group>
                <Form.Group className="mb-1 justify-content-center" controlId="repeat-password">
                    <Form.Label className="text-light mt-3">Repeat Password</Form.Label>
                    <Form.Control type="password" placeholder="repeat password" />
                </Form.Group>
                <Form.Group className="mb-1 justify-content-center" controlId="birth-year">
                    <Form.Label className="text-light mt-3">Year of Birth</Form.Label>
                    <Form.Control type="number" placeholder="Year of Birth" />
                </Form.Group>
                <Form.Group className="mb-1 justify-content-center" controlId="city">
                    <Form.Label className="text-light mt-3">City</Form.Label>
                    <Form.Control type="text" placeholder="City" />
                </Form.Group>
                <Form.Group className="mb-1 justify-content-center" controlId="postal-code">
                    <Form.Label className="text-light mt-3">Postal Code</Form.Label>
                    <Form.Control type="number" placeholder="Postal Code" />
                </Form.Group>
                <Form.Group className="mb-1 justify-content-center" controlId="credit-card">
                    <Form.Label className="text-light mt-3">Credit Card</Form.Label>
                    <Form.Control type="number" placeholder="Credit Card" />
                </Form.Group>
                <Button id ="Submit-button" type ="Submit"className="mt-3 mb-3" onClick= {FormControl} variant="primary">Register</Button>{' '}
                
            </Col>
            </Form>
        </Row>
    </Container>
)
}



export default Register