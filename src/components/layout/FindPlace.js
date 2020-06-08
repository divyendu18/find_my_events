import React, { Component } from "react";
import { connect } from "react-redux";
import CardEvents from "./CardEvents";
import { getEvents } from "../../redux/action/eventAction";

class FindPlace extends Component {
  render() {
    const { events } = this.props;
    return (
      <div className="events">
        {events.map((event) => (
          <CardEvents content={event} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.event.events,
});

export default connect(mapStateToProps, { getEvents })(FindPlace);
