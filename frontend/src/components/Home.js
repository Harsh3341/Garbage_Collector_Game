import styled from "styled-components";
import Garbage from "./Garbage";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const userAuthenticate = async () => {
    const option = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      url: "http://localhost:5000/api/",
    };

    const response = await fetch(option.url, option);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    userAuthenticate();
  }, []);

  const [axis, setAxis] = useState({
    x: 0,
    y: 0,
  });

  const coordinates = (e) => {
    setAxis({
      x: (e.clientX / window.innerWidth) * 100 - 1,
      y: (e.clientY / window.innerHeight) * 100 - 1,
    });
  };

  const mouseMovement = () => {
    window.addEventListener("mousemove", coordinates);
  };

  const removeMouseEventListener = () => {
    window.removeEventListener("mousemove", coordinates);
  };

  return (
    <Container>
      <Cannon></Cannon>
      <Garbage
        addmove={mouseMovement}
        rmove={removeMouseEventListener}
        axis={axis}
      />
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
