import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TrackVisibility from 'react-on-screen'
import 'animate.css'
import { ArrowRightCircle, Github } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header.svg";
import '../Styles/Banner.css'
import { HashLink } from 'react-router-hash-link';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/github.svg';

const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Java Developer", "React Js Developer", "Flutter Developer"];
    const period = 2000;

    const newRoute = "github.com";
    const summary = 'A Passionate & Skilled Java Full Stack Developer responsible for Development and Design of Efficient & Scalable Applications that make Technical Impact. Having extensive experience in Fullstack Development, with Technologies like Java Spring Boot, React Js, React Native and Flutter.';

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    {/* <span className="tagline">Welcome Here</span> */}
                                    <h1>{`Hello! I'm Rohit Parihar`}
                                        <br />
                                        <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Java Developer", "React Js Developer", "Flutter Developer" ]'>
                                            <span className="wrap">{text}
                                            </span>
                                        </span>
                                    </h1>
                                    <p>
                                        {summary}
                                    </p>
                                    <div className="banner-social">
                                        <a className='social github' target='_blank' href="https://www.github.com/beingrohit-exe"><img src={navIcon4} alt="" /></a>
                                        <a className='social linkedin' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/beingrohit/"><img src={navIcon1} alt="" /></a>
                                        <a className='social instagram' target='_blank' href="https://www.instagram.com/beingrohit.exe"><img src={navIcon3} alt="" /></a>
                                    </div>
                                    <a target="_blank" className='redirect-text'
                                        rel="noreferrer"
                                        href='https://www.github.com/beingrohit-exe'>My Projects<Github size={25} /></a>
                                </div>}

                        </TrackVisibility>

                    </Col>
                    <Col className='animated-image' xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    {/* <img className='banner-image' src={headerImg} alt="Header Img" /> */}
                                    <img className='banner-image' src="https://github-readme-streak-stats.herokuapp.com/?user=beingrohit-exe" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner