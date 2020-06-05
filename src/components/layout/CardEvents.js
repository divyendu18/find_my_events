import React from 'react';
import './Card.css';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const  CardEvents=(props)=>{
  const {content} = props;
        return (
          <div>        
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={content.image} />
              <Card.Body>
            <Card.Title><h2>{content.name}</h2></Card.Title>
                <Card.Text>
                  <h3>{content.date}</h3>
                  <h5>{content.place}</h5>
                </Card.Text>

                <Link to={`/events/${content.id}`} className="btn btn-primary btn-block"> Details
                                        </Link>
              </Card.Body>
            </Card>  
            </div>
        )
           
}
export default CardEvents;