import React, {Component} from "react";
import { Link } from "react-router";
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import ActionAndroid from 'material-ui/lib/svg-icons/action/android';
import AppBar from 'material-ui/lib/app-bar';
const style = {
  margin: 12,
};
class Layout extends Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }
  navigate(){
    console.log(this.context);
    this.props.push(null,"/");
  }
  render() {
    return (
      <div className="container text-center">
      <AppBar
 title="Title"
 iconClassNameRight="muidocs-icon-navigation-expand-more"
/>
        {this.props.children}
        <Link to="archives" ><button style={style} className="btn btn-primary">archives</button></Link>
        <Link to="settings" ><button style={style} className="btn btn-primary">Settings</button></Link>
        <RaisedButton label="Featured" onClick={this.navigate.bind(this)} secondary={true} style={style} icon={<ActionAndroid />} />
      </div>
    );
  }
}
export default Layout;
