import React, { Component } from "react";
import PropTypes from "prop-types";

class MyClassComponent extends Component {
  static defaultProps = {
    name: "기본 이름",
    email: "기본 이메일",
    favoriteNumber: "5",
  };
  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, email, children, favoriteNumber } = this.props;
    return (
      <div>
        {name}
        <br />
        {email}
        <br />
        children의 값은 '{children}'
        <br />
        내가좋아하는숫자 {favoriteNumber}
      </div>
    );
  }
}

export default MyClassComponent;
