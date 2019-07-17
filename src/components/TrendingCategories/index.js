import React from 'react';
import {Card, Badge} from 'react-bootstrap';
const TrendingCategories = ({categories}) => (
    <Card style={{ width: '100%', marginTop: 10, marginBottom: 10 }}>
        <Card.Body>
            <Card.Title>TrendingCategories</Card.Title>
            <div>
                {categories.map((category, index) => 
                    <Badge key={index} variant="primary" style={{margin: 5}}>{category[0]}</Badge>        
                )}
            </div>            
        </Card.Body>
    </Card>
)

export default TrendingCategories;