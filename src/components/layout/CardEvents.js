import React from "react";
//import { confirmAlert } from "react-confirm-alert";
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
        <div
          className="back"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Card style={{ width: "18rem" }}>
            <div class="wrapper">
              <div class="zoom-effect-container">
                <div class="image-card">
                  <Card.Img variant="top" src={content.image} />
                </div>
              </div>
            </div>
            <Card.Body>
              <Card.Title>
                <h2>{content.name}</h2>
              </Card.Title>
              <Card.Text>
                <h3>{content.date}</h3>
                <p>
                  <h5>{content.place}</h5>
                </p>
              </Card.Text>
              <Card.Footer>
                <Link
                  to={`/events/${content.id}`}
                  className="btn btn-primary d"
                >
                  {" "}
                  Details
                </Link>
                <i
                  className="fas fa-times btn btn-danger margin d2"
                  onClick={() => this.onDeleteClick(content.id)}
                >
                  {" "}
                  Remove
                </i>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteEvent })(CardEvents);
