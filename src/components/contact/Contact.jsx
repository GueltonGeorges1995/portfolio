import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import './contac.scss';

import emailjs from 'emailjs-com';

const Contact = () => {
    const [inputMail, setInputMail] = useState('');
    const [inputMessage, setInputMessage] = useState('');

    const handleInputMail = (e) => {
        setInputMail(e.target.value);
    }
    const handleInputMessage = (e) => {
        setInputMessage(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputMail.trim() !== "" && inputMessage.trim() !== "") {
            emailjs.sendForm('gmail', 'template_LJAhOJLf', '#myForm', 'user_Oh3MDSKAXr7QKxi8tVi7C')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }
    }
    return (
        <div id='contact' className='py-10-rem background-section'>
            <div className='text-center'>
                <h2 className='underline-title-section'>Contact</h2>
            </div>
            <Container className='mt-5'>
                <Form onSubmit={handleSubmit} id='myForm'>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label className='subtitle-contact'>Your Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={handleInputMail} name='email' />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='subtitle-contact'>Your Message</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder='Type your message' onChange={handleInputMessage} name='message' />
                    </Form.Group>
                    <Button className='btn-submit-contact' type='submit'>Send</Button>
                </Form>
            </Container>
        </div>
    )
};

export default Contact;