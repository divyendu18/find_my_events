import React, { Component } from "react";
import { connect } from "react-redux";
import { findEvent } from "../../redux/action/eventAction";

class Wallpaper extends Component {
    state = {
        place: "",
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.findEvent(this.state.place);
        this.setState({ place: "" });
        window.scrollTo(0, 600);
    };
    render() {
        return ( <
            div className = "header" >
            <
            form onSubmit = { this.handleSubmit } >
            <
            h1 id = "wall" > Events in Your City... < /h1> <
            div className = "main" >
            <
            div className = "form-group has-search" >
            <
            span class = "fa fa-search form-control-feedback" > < /span> <
            input type = "text"
            className = "search-field form-control"
            placeholder = "Select Your Palace...."
            value = { this.state.place }
            name = "place"
            onChange = { this.handleChange }
            /> <
            /div> <
            /div> <
            /form> <
            /div>
        );
    }
}
export default connect(null, { findEvent })(Wallpaper);