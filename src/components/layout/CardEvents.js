import React from "react";
import "./Card.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteEvent } from "../../redux/action/eventAction";

class CardEvents extends React.Component {
  onDeleteClick = (id) => {
    this.props.deleteEvent(id);
  };
  render() {
    const { content } = this.props;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={content.image} />
          <Card.Body>
            <Card.Title>
              <h2>{content.name}</h2>
            </Card.Title>
            <Card.Text>
              <h3>{content.date}</h3>
              <h5>{content.place}</h5>
            </Card.Text>
            <Card.Footer>
              <Link to={`/events/${content.id}`} className="btn btn-primary">
                {" "}
                Details
              </Link>
              <i
                className="fas fa-times btn btn-danger margin"
                onClick={() => this.onDeleteClick(content.id)}
              >
                {" "}
                Remove
              </i>
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default connect(null, { deleteEvent })(CardEvents);
