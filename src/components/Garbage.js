import styled from "styled-components";

const Garbage = () => {
  return (
    <MovementArea>
      <div></div>
    </MovementArea>
  );
};

const MovementArea = styled.div`
  background-color: lightblue;
  height: 100vh;
  width: 100%;

  div {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: black;
  }
`;

export default Garbage;
