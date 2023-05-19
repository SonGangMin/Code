// import react from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, email, children }) => {
  //   const { name, email, children } = ;
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
};

MyComponent.defaultProps = {
  name: "기본 이름",
  email: "기본 이메일",
};
MyComponent.prototype = {
  name: PropTypes.string,
  email: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
