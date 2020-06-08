import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { getEvent } from "../../redux/action/eventAction";

class Details extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getEvent(id);
  }

  render() {
    const { event } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="">
              Back to homepage
            </Link>
          </div>
        </div>
        <Card className="text-center">
          <Card.Header>{event.name}</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={event.image} />
            <Card.Title></Card.Title>
            <Card.Text>{event.description}</Card.Text>
            <Card.Text>{event.date}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted bg-primary">
            <p className="text-light m-0">{event.place}</p>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.event.event,
});

export default connect(mapStateToProps, { getEvent })(Details);
