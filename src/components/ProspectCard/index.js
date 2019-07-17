import React from 'react';
import {Card} from 'react-bootstrap';

const ProspectCard = ({cardInfo}) => (
    <Card style={{ width: '18rem' }}>        
        <Card.Body>
            <Card.Title>{cardInfo.domain}</Card.Title>
            <Card.Text>
            <a href={cardInfo.domain}>{cardInfo.domain}</a>
            </Card.Text>            
        </Card.Body>
    </Card>
);

export default ProspectCard;
