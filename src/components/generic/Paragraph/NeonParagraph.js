import { Component } from "react";
import "./NeonParagraph.css"

class NeonParagraph extends Component {
  render() {
    return <p style={{
        color: this.props.color,
        textShadow: `0 0 10px ${this.props.color}`,
        fontSize: this.props.size,
        className: "NeonParagraph",
        height: this.props.height,
        width: this.props.width,
        margin: "0px",
        padding: this.props.padding
    }}>{this.props.children}</p>;
  }
}

export default NeonParagraph;
