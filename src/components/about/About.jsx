import React,{useState, useEffect} from 'react';
import './about.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar'

const About = () => {
    const [progressBar, setProgressBar] = useState([0,0,0,0,0,0,0]);
     useEffect(() => {
         window.addEventListener('scroll' ,() =>{
            const isTop = window.scrollY > 300
            if (isTop) {
                setProgressBar([90,90,80,85,80,70,78]);
            }
        })
     }, [])
    return (
        <div className='py-10-rem' id='about'>
            <Container>
                <div className='text-center'>
                    <h2 className='underline-title-section'>About Me</h2>
                </div>
                <Row className='mt-5'>
                    <Col xl='4' lg='12'>
                        <p>Hi ! Welcome to my portfolio I'm a junior <span>Web Developer</span> from Brussel</p>
                        
                    </Col>
                    <Col xl='4' lg='12'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis culpa, tenetur eius nulla rerum pariatur? Magni culpa adipisci ipsam incidunt magnam rem eveniet tempore vitae esse ad, veritatis repellendus nesciunt?</p>
                    </Col>
                    <Col xl='4' lg='12'>
                        <ProgressBar label='HTML' now={progressBar[0]}  className='mb-2' />
                        <ProgressBar label='CSS' now={progressBar[1]} className='mb-2' />
                        <ProgressBar label='JS' now={progressBar[2]} className='mb-2'/>
                        <ProgressBar label='REACTJS' now={progressBar[3]} className='mb-2'/>
                        <ProgressBar label='VUEJS' now={progressBar[4]} className='mb-2'/>
                        <ProgressBar label='WORDPRESS' now={progressBar[5]} className='mb-2'/>
                        <ProgressBar label='PHP LARAVEL' now={progressBar[6]} className='mb-2'/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default About;