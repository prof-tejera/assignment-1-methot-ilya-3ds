import { Component } from "react";
import PropTypes from 'prop-types';

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

FlexColumn.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

FlexColumn.defaultProps = {
  color: "white",
  width: "100px",
  height: "200px",
  margin: "0px;",
  padding: "10px"
}

export default FlexColumn;
