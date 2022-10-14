import React from 'react'
import { Progress } from 'antd';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Concepts = () => {
    return (
        <>
            <div className="mainConcept">
                <div className="leftConcept">
                    <p className='concept-para'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                    <button className='btn4'>Our Concept</button>
                </div>
                <div className="rightConcept">
                    <Row className='circle'>
                        <Col sm={4} md={4} xl={3} xs={6}>
                            <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#F79868',
                                    '100%': 'black',
                                }}
                                percent={90}
                            />
                            <h4>Designing</h4>
                        </Col>


                        <Col sm={4} md={4} xl={3} xs={6}>
                            <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#F79868',
                                    '100%': 'black',
                                }}
                                percent={95}

                            />
                            <h4>Approved</h4>
                        </Col>
                        <Col sm={4} md={4} xl={3} xs={5}>
                            <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#F79868',
                                    '100%': 'black',
                                }}
                                percent={100}
                            />
                            <h4>Guaranteed</h4>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Concepts