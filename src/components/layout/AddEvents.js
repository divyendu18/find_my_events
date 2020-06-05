import React, { Component } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { addEvent } from "../../redux/action/eventAction";

class AddEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      place: "",
      date: "",
      image: "",
      description: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const id = uuid();
    const data = { id, ...this.state };
    this.props.addEvent(data);
    this.props.history.push("/");
  };

  render() {
    const { name, place, date, image, description } = this.state;
    return (
      <div className="add">
        <h1>Add Event</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            {" "}
            <label>name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            {" "}
            <label>description:</label>
            <textarea
              name="description"
              value={description}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            {" "}
            <label>date:</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            {" "}
            <label>place:</label>
            <input
              type="text"
              name="place"
              value={place}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            {" "}
            <label>image:</label>
            <input
              type="text"
              name="image"
              value={image}
              onChange={this.changeHandler}
            />
          </div>
          <button name="submit" type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addEvent })(AddEvents);
