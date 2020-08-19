import React from 'react';
import './about.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import htmlIcon from '../../assets/icons/icons8-html-5.svg';
import cssIcon from '../../assets/icons/icons8-css3.svg';
import javascriptIcon from '../../assets/icons/icons8-javascript.svg';
import reactIcon from '../../assets/icons/icons8-react.svg';
import vueIcon from '../../assets/icons/icons8-vue-js.svg';
import wordpressIcon from '../../assets/icons/icons8-wordpress.svg';
import phpIcon from '../../assets/icons/icons8-php-logo.svg';
import laravelIcon from '../../assets/icons/laravel-2.svg';
import bootstrapIcon from '../../assets/icons/icons8-bootstrap.svg';
import vuetifyIcon from '../../assets/icons/vuetify.svg';
import materialuiIcon from '../../assets/icons/icons8-material-ui.svg';
import nodeIcon from '../../assets/icons/icons8-nodejs.svg'

const About = () => {
    
    return (
        <div className='py-10-rem' id='about'>
            <Container>
                <div className='text-center'>
                    <h2 className='underline-title-section'>About Me</h2>
                </div>
                <Row className='mt-5'>
                    <Col xl={4} lg={12}>
                        <p>Hi ! Welcome to my portfolio I'm a junior <span>Web Developer</span> from Brussel</p>
                    </Col>
                    <Col xl={4} lg={12}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis culpa, tenetur eius nulla rerum pariatur? Magni culpa adipisci ipsam incidunt magnam rem eveniet tempore vitae esse ad, veritatis repellendus nesciunt?</p>
                    </Col>
                    <Col xl={4} lg={12} className='mt-xl-0 mt-5'>
                        <Row>
                            <Col xl={12} className='d-flex justify-content-around align-items-center'>
                                <Image src={htmlIcon} fluid />
                                <Image src={cssIcon} fluid />
                                <Image src={javascriptIcon} fluid />
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={12} className='d-flex justify-content-around align-items-center'>
                                <Image src={reactIcon} fluid />
                                <Image src={vueIcon} fluid />
                                <Image src={wordpressIcon} fluid />
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={12} className='d-flex justify-content-around align-items-center'>
                                <Image src={phpIcon} fluid />
                                <Image src={laravelIcon} fluid className='icon-laravel-about' />
                                <Image src={nodeIcon} fluid />
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={12} className='d-flex justify-content-around align-items-center'>
                                <Image src={vuetifyIcon} fluid className='icon-laravel-about' />
                                <Image src={materialuiIcon} fluid  />
                                <Image src={bootstrapIcon} fluid />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default About;