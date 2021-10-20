import { Component } from "react";

const styles = {
  centered: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  spaceEvenly: {
    justifyContent: "space-around",
    alignContent: "space-around",
  },
};

class FlexRow extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          backgroundColor: this.props.color,
          width: this.props.width,
          height: this.props.height,
          flexDirection: "row",
          flexWrap: "wrap",
          margin: this.props.margin,
          padding: this.props.padding,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
        className="Flex-Column"
      >
        {this.props.children}
      </div>
    );
  }
}

export default FlexRow;
