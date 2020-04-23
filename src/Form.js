import React from 'react'
import FormContext from './FormContext'
import { Container, Form, Button, Col } from 'react-bootstrap'

class CustomForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        fullName: ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        let firstName = this.state.firstName[0].toUpperCase() + this.state.firstName.slice(1)
        let lastName = this.state.lastName[0].toUpperCase() + this.state.lastName.slice(1)
        this.setState({fullName: `${firstName} ${lastName}`})
    }

    handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]: value})
    }

    render() {
        return(
            <Container style={{maxWidth: '650px'}}>
                <h1 className='pt-3'>Simple Unit Test</h1>
                <FormContext.Provider value={null}>
                <Form onSubmit={this.onSubmit}>
                    <Form.Row className='py-3'>
                        <Col>
                            <Form.Control onChange={this.handleInputChange} name='firstName' placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control onChange={this.handleInputChange} name='lastName' placeholder="Last name" />
                        </Col>
                    </Form.Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </FormContext.Provider>
            </Container>
        )
    }
}

export default CustomForm