import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Styles/WhatDo.css'

import JavaSvg from '../assets/svg/java-original-wordmark.svg'
import kafka from '../assets/svg/apachekafka.svg'
import docker from '../assets/svg/docker-original-wordmark.svg'
import mongodb from '../assets/svg/mongodb-plain-wordmark.svg'
import mysql from '../assets/svg/mysql-original-wordmark.svg'
import oauth from '../assets/svg/oauth.svg'
import postman from '../assets/svg/postman.svg'
import spring from '../assets/svg/spring.svg'
import restapi from '../assets/svg/rest-api.svg'


const WhatDo = () => {
    return (
        <section style={{ position: "relative" }} id='skills'>
            <div className='col-md-8 col-xl-8 col-xs-10 offset-xs-1 offset-xl-2 offset-md-2 what-container'>
                <h1 className='head-text'>Backend Development</h1>
                <Row className='part-row'>
                    <Col className='what-images' xl={6} md={6} xs={10}>
                        <Row>
                            <Col><img className='java-image' src={JavaSvg} alt="Java Image" /></Col>
                            <Col><img className='java-image' src={spring} alt="Java Image" /></Col>
                            <Col><img className='java-image' src={docker} alt="Java Image" /></Col>
                        </Row>
                        <Row>
                            <Col><img className='java-image' src={kafka} alt="Java Image" /></Col>
                            <Col><img className='java-image' src={mongodb} alt="Java Image" /></Col>
                            <Col><img className='java-image' src={postman} alt="Java Image" /></Col>
                        </Row>
                        <Row>
                            <Col><img className='java-image' src={mysql} alt="Java Image" /></Col>
                            <Col><img className='java-image' src={oauth} alt="Java Image" /></Col>
                            <Col><img className='java-image' src={restapi} alt="Java Image" /></Col>
                        </Row>
                    </Col>
                    <Col className='what-row' xl={6} md={6} xs={10}>
                        <ol className='list-items'>
                            <li>Developing Highly Scalable and Optimised production ready REST API's.</li>
                            <li>Experience in developing Applications using Spring Boot 3.x and Java 17.</li>
                            <li>Proficient in using tools like Docker, Kafka, Maven, Postman, etc.</li>
                            <li>Strong knowledge of common backend technologies like Spring Security, OAuth 2.0, Zipkin, Microservices and more.</li>
                            <li>Experience in developing complex NOSQL/SQL queries, procedures, packages and views in multiple databases like MySql, Postgresql, MongoDb using Hibernate ORM.</li>
                            <li>Had developed scalable Fullstack applications using Reactive Programming.</li>
                        </ol>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default WhatDo