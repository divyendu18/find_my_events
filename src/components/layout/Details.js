import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
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
      <div className="card-details">
        <div className="details">
              <h1>{event.name}</h1>
              <p>{event.description}</p>
              <h5>{event.date}</h5>
            </div>
            <div className="image">
              <img src={event.image} alt="" id="image"/></div>
            
            <div className="event-btns">
                <Button varient="primary" className="event-btn mr-2">Are you going?</Button></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.event.event,
});

export default connect(mapStateToProps, { getEvent })(Details);


// style={{ width: "18rem" }}