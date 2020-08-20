import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import './contac.scss';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";

const Contact = () => {
    const [isMessageSent, setIsMessageSent] = useState(false);
    
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (data, e ) => {
        emailjs.sendForm('gmail', 'template_LJAhOJLf', '#myForm', 'user_Oh3MDSKAXr7QKxi8tVi7C')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
        e.target.reset();
        setIsMessageSent(true);
    }

    return (
        <div id='contact' className='py-10-rem background-section'>
            <div className='text-center'>
                <h2 className='underline-title-section'>Contact</h2>
            </div>
            <Container className='mt-5'>
                <Form onSubmit={handleSubmit(onSubmit)} id='myForm'>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label className='subtitle-contact'>Your Email Address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            name='email' 
                            ref={register({
                                required: "Required",
                                pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                                }
                             })}/>
                        {errors.email && errors.email.message}
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='subtitle-contact'>Your Message</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows="3" 
                            placeholder='Type your message'  
                            name='message' 
                            ref={register({
                                required: "Required",
                            })}/>
                    </Form.Group>
                    {errors.message && errors.message.message}
                    <br/>
                    {isMessageSent ? <p className='subtitle-contact'>Thank you for your message ! I'll be in touch as soon as possible</p> : <Button className='btn-submit-contact' type='submit'>Send</Button>}
                </Form>
            </Container>
        </div>
    )
};

export default Contact;