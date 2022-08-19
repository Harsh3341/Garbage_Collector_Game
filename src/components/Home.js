import styled from "styled-components";
import Garbage from "./Garbage";
import { useState } from "react";

const Home = () => {
  const [isStop, setStop] = useState(false);
  const [axis, setAxis] = useState({
    x: 0,
    y: 0,
  });

  window.addEventListener("click", () => {
    console.log("click");
    if (!isStop) {
      setStop(true);
    } else {
      setStop(false);
    }
  });

  window.addEventListener("mousemove", (e) => {
    setAxis({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  });

  return (
    <Container>
      <Cannon></Cannon>
      <Garbage click={isStop} axis={axis} />
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
