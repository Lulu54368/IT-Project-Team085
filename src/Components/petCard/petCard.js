import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import ToggleButton from 'react-bootstrap/ToggleButton';

function PetCard(props) {

  // const [checked, setChecked] = React.useState(false);
  
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Age: {props.age} months
          f82f7dff (show the pet list)
        </Card.Text>
        <Button variant="#90A955">More Information</Button>
      </Card.Body>
    </Card>
  );
}

export default PetCard;