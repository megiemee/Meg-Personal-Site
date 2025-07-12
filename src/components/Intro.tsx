
import selfie from "../assets/images/selfie.jpg"
import { Container, Row, Col } from 'react-bootstrap';


function Intro(){

    const description = <><p>Hi, I am Megan!</p><p>I am currently a second year computer science major.<br/>
     Chances are, I am probably coding, reading, or <s>watching kdramas</s> learning korean right now.</p></>

    return (

        <>
        <Col className="text-center" id = "intro">
            <img width="10%" height="auto" src={selfie} alt = "Selfie"></img>
            {description}
        </Col>
        
        </>
    )
}

export default Intro;