import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './services.scss' 

const Services = () => {
    return (
        <div id='services' className='py-10-rem'>
            <div className='text-center'>
                    <h2 className='underline-title-section'>Services</h2>
            </div>
            <Container>
                <Row className='mt-xl-5 mt-lg-0'>
                    <Col xl={3} lg={12} className='mt-xl-0 mt-5'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='bg-icon-services d-flex justify-content-center align-items-center'>
                                <i className="fas fa-tachometer-alt text-light icon-services-size "></i>
                            </div>
                        </div>
                        <div className='text-center mt-4'>
                            <h4 className='title-icon-services'>Fast</h4>
                            <p>Fast load times and lag free interaction, my highest priority.</p>
                        </div>
                    </Col>
                    <Col xl={3} lg={12} className='mt-xl-0 mt-5'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='bg-icon-services d-flex justify-content-center align-items-center'>
                                <i className="fas fa-mobile text-light icon-services-size"></i>
                            </div>
                        </div>
                        <div className='text-center mt-4'>
                            <h4 className='title-icon-services'>Responsive</h4>
                            <p>My layouts will work on any device, big or small.</p>
                        </div>
                    </Col>
                    <Col xl={3} lg={12} className='mt-xl-0 mt-5'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='bg-icon-services d-flex justify-content-center align-items-center'>
                                <i className="fas fa-lightbulb text-light icon-services-size"></i>
                            </div>
                        </div>
                        <div className='text-center mt-4'>
                            <h4 className='title-icon-services'>Intuitive</h4>
                            <p>Strong preference for easy to use, intuitive UX/UI.</p>
                        </div>
                    </Col>
                    <Col xl={3} lg={12} className='mt-xl-0 mt-5'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='bg-icon-services d-flex justify-content-center align-items-center'>
                                <i className="fas fa-rocket text-light icon-services-size"></i>
                            </div>
                        </div>
                        <div className='text-center mt-4'>
                            <h4 className='title-icon-services'>Dynamic</h4>
                            <p>Websites don't have to be static, I love making pages come to life.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Services;