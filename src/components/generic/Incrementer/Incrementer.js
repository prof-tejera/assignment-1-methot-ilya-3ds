import { Component } from "react";
import Button from "../Button/Button";
import FlexColumn from "../FlexDivs/FlexColumn";
import FlexRow from "../FlexDivs/FlexRow";
import "./Incrementer.css";

class Incrementer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variable: 0,
    };
  }

  render() {
    const changeTime = (direction, maxMin) => {
      if (direction === "increment") {
        if (this.state.variable < maxMin) {
          this.setState({ variable: this.state.variable + 1 });
        }
      } else {
        if (this.state.variable > maxMin) {
          this.setState({ variable: this.state.variable - 1 });
        }
      }
    };

    // Add leading zeros
    // src: https://www.codegrepper.com/code-examples/javascript/react+js+add+leading+zeros

    function padLeadingZeros(num, size) {
      var s = num + "";
      while (s.length < size) s = "0" + s;
      return s;
    }
    // examples:
    // padLeadingZeros(57, 3);// "057"
    // padLeadingZeros(57, 4); //"0057"

    return (
      <>
        <FlexColumn padding="10px"
          width={this.props.width}
          height={this.props.height}
          centered="true"
          spaceEvenly="true"
        >
          <FlexRow spaceEvenly="true" centered="true">
            <Button
              onClick={() => {
                changeTime("increment", this.props.max);
              }}
              className="smallButton"
              width={this.props.width / 2}
              height={this.props.height / 2}
            >
              ^
            </Button>
          </FlexRow>
          <FlexRow width="auto" height="auto" centered="true">
            <Button className="display" disabled="true" width={this.props.width} height={this.props.height}>
              {padLeadingZeros(this.state.variable, this.props.addZeros)}
              {this.props.scale}
            </Button>
          </FlexRow>
          <FlexRow spaceEvenly="true" centered="true">
            <Button
              onClick={changeTime("increment", this.props.min)}
              className="smallButton"
              width={this.props.width / 2}
              height={this.props.height / 2}
            >
              v
            </Button>
          </FlexRow>
        </FlexColumn>
      </>
    );
  }
}

Incrementer.defaultProps = {
  width: 50,
  height: 50,
  max: 10,
  min: 0,
  addZeros: 2,
  scale: "",
};

export default Incrementer;
