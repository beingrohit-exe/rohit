import { Col, Row } from "react-bootstrap";

function skillsCard(title, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, body) {
    return <section style={{ position: "relative" }} id='skills'>
        <div className='col-md-8 col-xl-8 col-xs-10 offset-xs-1 offset-xs-2 offset-xl-2 offset-md-2 what-container'>
            <h1 className='head-text'>{title}</h1>
            <Row className='part-row'>
                <Col className='what-images' xl={6} md={6} xs={10}>
                    <Row>
                        <Col><img className='java-image' src={icon1} alt="Java Image" /></Col>
                        <Col><img className='java-image' src={icon2} alt="Java Image" /></Col>
                        <Col><img className='java-image' src={icon3} alt="Java Image" /></Col>
                    </Row>
                    <Row>
                        <Col><img className='java-image' src={icon4} alt="Java Image" /></Col>
                        <Col><img className='java-image' src={icon5} alt="Java Image" /></Col>
                        <Col><img className='java-image' src={icon6} alt="Java Image" /></Col>
                    </Row>
                    <Row>
                        <Col><img className='java-image' src={icon7} alt="Java Image" /></Col>
                        <Col><img className='java-image' src={icon8} alt="Java Image" /></Col>
                        <Col><img className='java-image' src={icon9} alt="Java Image" /></Col>
                    </Row>
                </Col>
                <Col className='what-row' xl={6} md={6} xs={10}>
                    <ol className='list-items'>
                        {body.map((value, key) => {
                            return <li key={key}>{value}</li>
                        })}
                    </ol>
                </Col>
            </Row>
        </div>
    </section>
}

export default skillsCard;