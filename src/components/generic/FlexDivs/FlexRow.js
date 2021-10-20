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

FlexRow.propTypes = {
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

FlexRow.defaultProps = {
  color: "white",
  width: "200px",
  height: "100px",
  margin: "0px;",
  padding: "10px"
}


export default FlexRow;
