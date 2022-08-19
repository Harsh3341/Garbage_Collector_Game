import styled from "styled-components";
import Garbage from "./Garbage";

const Home = () => {
  return (
    <Container>
      <Cannon></Cannon>
      <Garbage />
      <Bucket></Bucket>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

const Cannon = styled.div`
  height: 50px;
  width: 70px;
  background-color: green;
  right: 0px;
  margin: 10px;
  position: absolute;
  border-radius: 70%;
  border-top-right-radius: 100%;
  border-bottom-right-radius: 100%;
`;

const Bucket = styled.div`
  height: 100px;
  width: 100px;
  background-color: red;
  position: absolute;
  left: 50px;
  bottom: 0px;
  border-radius: 20px;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
`;

export default Home;
