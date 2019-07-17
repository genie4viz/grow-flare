import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import GaugeGraph from '../GaugeGraph';

const RecommendProspects = () => (
    <Card style={{ width: '100%', marginBottom: 10, height: 300 }}>
        <Card.Body>
            <Card.Title>Recommended Prospects (showing top 10)</Card.Title>            
            <Row>
                <Col className="justify-content-md-center">
                    <GaugeGraph percent={50} />
                </Col>
                <Col className="justify-content-md-center">
                    <GaugeGraph percent={50} />
                </Col>
                <Col className="justify-content-md-center">
                    <GaugeGraph percent={50} />
                </Col>
            </Row>            
        </Card.Body>
    </Card>
)

export default RecommendProspects;