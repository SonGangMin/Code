import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      이름: {name} <br />
      숫자: {favoriteNumber} <br />
      children값: {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
  favoriteNumber: 3,
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
