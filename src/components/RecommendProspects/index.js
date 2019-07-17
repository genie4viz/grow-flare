import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import ProspectCard from '../ProspectCard';
import GaugeGraph from '../GaugeGraph';

const COLUMN_SIZE = 3;

const RecommendProspects = ({comps}) => (
    <Card style={{ width: '100%', marginBottom: 10 }}>
        <Card.Body>
            <Card.Title>Recommended Prospects (showing top 10)</Card.Title>            
            <Row>
                {comps.map((comp, index) => 
                    <Col key={index} md="4" className="justify-content-md-center">
                        <ProspectCard cardInfo={comp[1]} />                        
                    </Col>                    
                )}
            </Row>
        </Card.Body>
    </Card>
)

export default RecommendProspects;