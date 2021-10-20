import { Component } from "react";
import "./NeonParagraph.css"

class NeonParagraph extends Component {
  render() {
    return <p style={{
        color: this.props.color,
        textShadow: `0 0 10px ${this.props.color}`,
        fontSize: this.props.size,
        className: "NeonParagraph"
    }}>{this.props.children}</p>;
  }
}

export default NeonParagraph;
