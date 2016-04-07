import React, {Component} from "react";
import { Link, Router } from "react-router";
const style = {
  "padding":"10px"
}
class Layout extends Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }
  navigate(){
    console.log(this.context);
    Router.push("/");
  }
  render() {
    return (
      <div className="container text-center">
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="archives" ><button style={style} className="btn btn-primary">archives</button></Link>
        <Link to="settings" ><button style={style} className="btn btn-primary">Settings</button></Link>
        <button onClick={this.navigate.bind(this)}>Featured</button>
      </div>
    );
  }
}
export default Layout;
