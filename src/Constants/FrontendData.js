import React from 'react'
import skillsCard from '../Components/SkillsCard';
import react from '../assets/svg/react.svg'
import flutter from '../assets/svg/flutter.svg'
import reactnative from '../assets/svg/react-native.svg'
import html from '../assets/svg/html.svg'
import javascript from '../assets/svg/javascript-js.svg'
import css from '../assets/svg/css.svg'
import bootstrap from '../assets/svg/bootstrap.svg'
import materialui from '../assets/svg/material-ui.svg'
import restapi from '../assets/svg/rest-api.svg'

const FrontendData = () => {
    const data = [
        "Extensive experience in developing Webapps and Mobile Applications using React Js, Flutter, React Native Javascript, CSS, Semantic HTML5, etc.",
        "Experience in developing Single Page Applications using React Js and React Router Dom.",
        "Currently working on building a new Flutter mobile Application Inforing and Bloggios-Learn.",
        "Strong knowledge on making efficient UI components in React Js and Flutter.",
        "Experience in efficiently consuming and managing RESTful services in React Js, Flutter and React Native.",
    ];
    return (
        skillsCard(
            'Client Side',
            react,
            flutter,
            reactnative,
            javascript,
            html,
            restapi,
            materialui,
            css,
            bootstrap,
            data
        )
    )
}

export default FrontendData