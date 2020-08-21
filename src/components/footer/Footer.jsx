import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './footer.scss';

const Footer = () => {
    return (
        <div className='bg-footer'>
            <Container>
                <Row className='pt-5'>
                    <Col col={6} className='d-flex justify-content-start align-items-center'>
                        <p className='text-light'>© 2020, Georges Guelton</p>
                    </Col>
                    <Col col={6} className='d-flex justify-content-end align-items-center'>
                        <div>
                            <a href="https://github.com/GueltonGeorges1995" target='_blank' rel='noopener noreferrer'>
                                <i className="fab fa-github text-light icon-footer"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/georges-guelton-664809194/" target='_blank' rel='noopener noreferrer'>
                                <i className="fab fa-linkedin text-light icon-footer mx-xl-5 mx-2"></i>
                            </a>
                            <a href="mailto:georges.guelton@gmail.com" target='_blank' rel='noopener noreferrer'>
                                <i className="fas fa-envelope-open text-light icon-footer"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Footer;