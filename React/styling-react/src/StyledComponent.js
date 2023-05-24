import styled, { css } from "styled-components";

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
`;

const buttonProps = {
  color: "black",
  textColor: "white",
};
const Button = styled.button`
  background: white;
  color: ${(props) => props.color || "green"}
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: ${(props) => (props.color ? props.color : "gray")};

      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const name = "John";
const age = 30;
const message = `Hello, my name is ${name} and i am ${age}years old`;
console.log(message);

const StyledComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true} color={"red"}>
      테두리만
    </Button>
  </Box>
);

export default StyledComponent;
