import React from 'react';
import { Button,Card} from 'react-bootstrap';

const News = (props) => {
    const {title,description,urlToImage}=props.article;
    return (
            <Card>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
    <img src={urlToImage} alt=""/>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    );
};

export default News;