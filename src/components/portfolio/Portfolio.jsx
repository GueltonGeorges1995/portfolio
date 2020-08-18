import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'

import imgPortfolio1 from '../../assets/images/img-portfolio-1.png';
import imgPortfolio2 from '../../assets/images/img-portfolio-2.png';
import imgPortfolio3 from '../../assets/images/img-portfolio-3.png';
import imgPortfolio4 from '../../assets/images/img-portfolio-4.png';
import imgPortfolio5 from '../../assets/images/img-portfolio-5.png';
import imgPortfolio6 from '../../assets/images/img-portfolio-6.png';


import './portfolio.scss';

const Portfolio = () => {
    

    //Modal 1
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    //Modal 2
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

   //Modal 3
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    //Modal 4
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    //Modal 5
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true); 

    //Modal 6
    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);   



    return (
        <div className='py-10-rem background-section' id='portfolio'>
            <Container>
                <div className='text-center'>
                    <h2 className='underline-title-section'>My Work</h2>
                </div>
                <Row className='mt-5'>
                    <Col xl='4' lg='12'>
                        <Image src={imgPortfolio1} rounded fluid onClick={handleShow1} className='opacity-hover-img-portfolio shadow' />
                        <div className='text-center'>
                            <h5 className='mt-4 portfolio-subtitle'>Authscorp Landing Page</h5>
                        </div>
                        <Modal show={show1} onHide={handleClose1}>
                            <Modal.Header closeButton>
                                <Modal.Title>Authscorp Landing Page</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>It's a landing page that i've build while doing an internship with bit4you</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose1}>
                                Close
                            </Button>
                                <a href="https://www.google.com" className='text-light link-portfolio btn btn-primary' target='_blank' rel='noopener noreferrer' onClick={handleClose1}>See More</a>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                    <Col xl='4' lg='12'>
                        <Image src={imgPortfolio2} rounded fluid onClick={handleShow2} className='opacity-hover-img-portfolio shadow' />
                        <div className='text-center'>
                            <h5 className='mt-4 portfolio-subtitle'>Spreading Seeds Landing Page</h5>
                        </div>
                        <Modal show={show2} onHide={handleClose2}>
                            <Modal.Header closeButton>
                                <Modal.Title>Spreading Seeds Landing Page</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                It's another landing page that i've build for a friend's end of study work
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose2}>
                                Close
                            </Button>
                            <a href="https://spreading-seeds.vercel.app/" className='text-light link-portfolio btn btn-primary' target='_blank' rel='noopener noreferrer' onClick={handleClose2}>See More</a>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                    <Col xl='4' lg='12'>
                        <Image src={imgPortfolio3} rounded fluid onClick={handleShow3} className='opacity-hover-img-portfolio shadow' />
                        <div className='text-center'>
                            <h5 className='mt-4 portfolio-subtitle'>Project Manager</h5>
                        </div>
                        <Modal show={show3} onHide={handleClose3}>
                            <Modal.Header closeButton>
                                <Modal.Title>Project Manager</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                It's a Project Manager done with Vuejs
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose3}>
                                Close
                            </Button>
                            <a href="https://spreading-seeds.vercel.app/" className='text-light link-portfolio btn btn-primary' target='_blank' rel='noopener noreferrer' onClick={handleClose3}>See More</a>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col xl='4' lg='12'>
                        <Image src={imgPortfolio4} rounded fluid onClick={handleShow4} className='opacity-hover-img-portfolio shadow' />
                        <div className='text-center'>
                            <h5 className='mt-4 portfolio-subtitle'>Pizza Animation</h5>
                        </div>
                        <Modal show={show4} onHide={handleClose4}>
                            <Modal.Header closeButton>
                                <Modal.Title>Pizza Animation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Order your favorite pizza !
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose4}>
                                Close
                            </Button>
                            <a href="https://pizza-project.vercel.app/" className='text-light link-portfolio btn btn-primary' target='_blank' rel='noopener noreferrer' onClick={handleClose4}>See More</a>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                    <Col xl='4' lg='12'>
                        <Image src={imgPortfolio5} rounded fluid onClick={handleShow5} className='opacity-hover-img-portfolio shadow' />
                        <div className='text-center'>
                            <h5 className='mt-4 portfolio-subtitle'>Artist Portfolio</h5>
                        </div>
                        <Modal show={show5} onHide={handleClose5}>
                            <Modal.Header closeButton>
                                <Modal.Title>Artisit Portfolio</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Artist's Portfolios build with vanilla Js
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose5}>
                                Close
                            </Button>
                            <a href="https://artist-portfolio.vercel.app/" className='text-light link-portfolio btn btn-primary' target='_blank' rel='noopener noreferrer' onClick={handleClose5}>See More</a>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                    <Col xl='4' lg='12'>
                      <Image src={imgPortfolio6} rounded fluid onClick={handleShow6} className='opacity-hover-img-portfolio shadow' />
                        <div className='text-center'>
                            <h5 className='mt-4 portfolio-subtitle'>Old Portfolio</h5>
                        </div>
                        <Modal show={show6} onHide={handleClose6}>
                            <Modal.Header closeButton>
                                <Modal.Title>Old Portfolio</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                My old portfolio build with React Js
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose6}>
                                Close
                            </Button>
                            <a href="https://old-portfolio.vercel.app/" className='text-light link-portfolio btn btn-primary' target='_blank' rel='noopener noreferrer' onClick={handleClose6}>See More</a>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
                <div className='text-center mt-5'>
                    <h3 className='portfolio-subtitle'>And More To Come ...</h3>
                </div>

            </Container>
        </div>
    )
};

export default Portfolio;