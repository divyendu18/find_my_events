import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { findEvent } from "../../redux/action/eventAction";

class Wallpaper extends Component {
  state = {
    place: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.findEvent(this.state.place);
    this.setState({ place: "" });
    window.scrollTo(0, 600);
  };
  render() {
    return (
      <div className="header">
        <form onSubmit={this.handleSubmit}>
          <h1>Events in Your City...</h1>
          <div className="form-box">
            <input
              type="text"
              className="search-field"
              placeholder="Select Your Palace...."
              value={this.state.place}
              name="place"
              onChange={this.handleChange}
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(null, { findEvent })(Wallpaper);
