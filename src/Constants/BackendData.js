import React from 'react'
import skillsCard from '../Components/SkillsCard';
import JavaSvg from '../assets/svg/java-original-wordmark.svg'
import kafka from '../assets/svg/apachekafka.svg'
import docker from '../assets/svg/docker-original-wordmark.svg'
import mongodb from '../assets/svg/mongodb-plain-wordmark.svg'
import mysql from '../assets/svg/mysql-original-wordmark.svg'
import oauth from '../assets/svg/oauth.svg'
import postman from '../assets/svg/postman.svg'
import spring from '../assets/svg/spring.svg'
import restapi from '../assets/svg/rest-api.svg'

const BackendData = () => {
    const data = [
        "Developing Highly Scalable and Optimised production ready REST API's.",
        "Experience in developing Applications using Spring Boot 3.x and Java 17.",
        "Proficient in using tools like Docker, Kafka, Maven, Postman, etc.",
        "Strong knowledge of common backend technologies like Spring Security, OAuth 2.0, Zipkin, Microservices and more.",
        "Experience in developing complex NOSQL/SQL queries, procedures, packages and views in multiple databases like MySql, Postgresql, MongoDb using Hibernate ORM.",
        "Had developed scalable Fullstack applications using Reactive Programming."
    ];
    return (
        skillsCard(
            'Backend Development',
            JavaSvg,
            spring,
            mysql,
            restapi,
            mongodb,
            docker,
            kafka,
            oauth,
            postman,
            data
        )
    )
}

export default BackendData