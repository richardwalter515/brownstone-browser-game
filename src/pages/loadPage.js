import React from 'react';
import { Row, Col, Container, Image, Button } from 'react-bootstrap';
import "../pages/loadPage.css";
import brownstoneText from '../assets/brownstoneText.png';

function LoadPage() {
    return (
        <>
        <Container fluid>
            <Row>
                <Col className="centerJustification">
                    <Image src={brownstoneText} className="centerJustification"/>
                </Col>
            </Row>
            <Row className="horizontalJustification">
                <Col className="centerJustification">
                    <Button href="/FloorOne" id="playGameButton"><strong>Play Game</strong></Button>
                    <Button href="/Leaderboard" id="leaderboardButton"><strong>View Leaderboard</strong></Button>
                </Col>
            </Row>
        </Container>
        </>
    );
  }
  
  export default LoadPage;