import { Component } from "react";

const styles = {
  centered: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  }
}

class FlexColumn extends Component {

  render() {
    return (
      <div
        style={{
            display: "flex",
            backgroundColor: this.props.color,
            width: this.props.width,
            height: this.props.height,
            flexDirection: "column",
            ...this.props.centered && styles.centered
        }
        }
        className="Flex-Column"
      >
        {this.props.children}
      </div>
    );
  }
}

export default FlexColumn;