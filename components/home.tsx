import type { NextPage } from 'next';
import styles from '../styles/home.module.css';
import { BiChevronRight } from 'react-icons/bi';

import { Container, Row, Col, Offcanvas, Button } from 'react-bootstrap'
import Image from 'next/image'
import { useState } from 'react';

const ComingSoon: NextPage = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
      <Container fluid style={{ minHeight: '100vh'}}>
        

        <Offcanvas show={show} onHide={handleClose} bsPrefix='offcanvas'>
          <Offcanvas.Header closeButton>
            <div></div>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>

        <Row className={styles.root}>
          <Col xs={12} sm={12} md={6} className={styles.leftContainer} >
          <Button variant="dark" onClick={handleShow} as="div" className={styles.chevronButton}>
            <BiChevronRight size={20} className={styles.icon} />
          </Button>
            <div className={styles.description}>
              Hi there, i’M 
              <div>
                Methe
              </div>
              Software Engineer
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} className={styles.rightContainer} >
             <Row className={styles.rightContainerRow} > 
                <Col md={12} className={styles.avatar} >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={process.env.BACKEND_URL + "/assets/profile.png"} 
                      //  unoptimized={true} 
                      height={"100%"} width={"100%"} 
                      alt="profile" 
                     />
                </Col>
                <Col md={12} className={styles.seeMyWork}>
                    <div className={styles.button} > SEE MY WORK </div>
                </Col>
            </Row>
          </Col>
        </Row>
        
      </Container>
  )
}

export default ComingSoon