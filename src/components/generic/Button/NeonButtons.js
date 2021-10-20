import { Component } from "react";
import "./NeonButtons.css"

class NeonButton extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        style={
          {
            boxSizing: "border-box",
            textAlign: "center",
            width: this.props.width,
            height: this.props.height,
            cursor: this.props.disabled && "auto",
            borderRadius: "30px",
            
          }
        }
        className= {this.props.className}
        disabled={this.props.disabled}
        selected={this.props.selected}

      >
        {this.props.text}
        {this.props.image}
        {this.props.children}
      </button>
    )
  }
}

NeonButton.defaultProps = {
  className: "Default-button",
  backgroundColor: "blue"
}


export default NeonButton;