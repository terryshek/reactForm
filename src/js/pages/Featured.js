import React, {Component} from "react";
import materialAwesome from "./materialAwesome"
export default class Featured extends Component {
  constructor() {
    super()
  }
  componentDidMount(){
    console.log("Featured");
    console.log(materialAwesome);

  }
  render(){
    return (
      <div>
        <h1>Featured</h1>
        <materialAwesome/>
      </div>
    )
  }
}
