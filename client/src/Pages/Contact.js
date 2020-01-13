import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Content from '../Components/Content';
import Jumbo from '../Components/Jumbo';
import axios from 'axios';

class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);

    }

    handleChange = (e) => {
       this.setState({ [e.target.name]: e.target.value })
    }

    
    resetForm() {
        this.setState({name: '', email: '', message: ''})
    }

    handleSubmit(e) {
        e.preventDefault();

        axios({
            method: 'POST',
            url:'http://localhost:3001/api/form',
            data: this.state,
        }).then(() =>{
            this.resetForm()
        });
        
        this.resetForm()
    }


    render() {
        return (            
            <Content>
            <Jumbo title="Let's talk!" />
                <Form method='POST' onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor='full-name'>Full Name</Form.Label>
                        <Form.Control id='full-name' name='name' type='text' onChange={this.handleChange}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor='email'>Email</Form.Label>
                        <Form.Control id='email' name='email' type='email' onChange={this.handleChange}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor='message'>Message</Form.Label>
                        <Form.Control id='message' name='message' as='textarea' rows='4' onChange={this.handleChange}></Form.Control>
                    </Form.Group>

                    <Button className='d-inline-block' variant='primary' type='submit'>
                        Send
                    </Button>

                </Form>
            </Content>
        );
    }
}

export default ContactMe;
