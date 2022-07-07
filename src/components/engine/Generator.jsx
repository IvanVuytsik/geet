import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './generator.css'

const Generator = () => {

    const [image, setImage] = useState(null);
    const canvas = useRef(null);

    const number = 1;  
 
    useEffect(()=> {
        const image = new Image();
        // let path = "../../assets/elements/male_medieval/dummy/"
        // let name = "dummy_" + number + ".png";
        image.src = "./dummy_1.png"
        image.onload = () => setImage(image)
    }, [])

    
    useEffect(() => {
        if (image && canvas) {
            const ctx = canvas.current.getContext("2d");
            ctx.fillStyle = "black";
            ctx.fillRect(0,0,0,0);
            ctx.drawImage(image, 0, 0);
        }
    }, [image, canvas])

 


  return (
    <section className="editcard__section">
        <Container>
            <Row>
                <Col>
                    <div className="canvasBox">
                        <canvas className="canvas" ref={canvas} width={256} height={256}></canvas>

                    </div>
                </Col>

                 <Col>
                    <div>buttons</div>
                </Col>

                 <Col>
                    <canvas className="main__canvas"></canvas>
                </Col>
            </Row>
        </Container>
    </section>
    
  )
}

export default Generator