import React, { Component } from "react";
import AppNavbar from "./components/layout/AppNavbar";
import FindPlace from "./components/layout/FindPlace";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddEvents from "./components/layout/AddEvents";
import Details from "./components/layout/Details";
import Home from "./components/layout/Home";
import { Provider } from "react-redux";
import store from "./redux/Store";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./App.css";
import Address from "./components/layout/Address";
import { BackTop } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
class App extends Component {
  state = {
    content: "loading...",
  };

  async componentDidMount() {
    AOS.init();
    const url = "http://localhost:3000/events";
    const response = await fetch(url);
    const content = await response.json();
    //console.dir({content});
    this.setState({ content });
  }
  render() {
    //const { content :[{id,name,place,date}] }   = this.state;
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/events/:id" component={Details} />
            <Route exact path="/place" component={FindPlace} />
            <Route exact path="/add" component={AddEvents} />
          </div>
          <Address />
          <div className="footer">
            CopyRight &copy; Dj {new Date().getFullYear()}
            <BackTop className="backtop">
              <i className="fas fa-arrow-up" />
              Scroll TO UP
            </BackTop>
            {/* <BackTop className="backtop">
              <VerticalAlignTopOutlined />
            </BackTop> */}
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
