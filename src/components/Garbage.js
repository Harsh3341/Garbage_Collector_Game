import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Garbage = (props) => {
  const [isDropping, setDropping] = useState({
    x: 0,
    y: 50,
  });

  const [wait, setWait] = useState(true);

  const ref = useRef(null);

  useEffect(() => {
    const handClick = () => {
      setWait(false);
      console.log("handClick");
      props.addmove();
    };
    ref.current.addEventListener("mousedown", handClick);
    return () => {
      ref.current.removeEventListener("mousedown", handClick);
    };
  }, []);

  useEffect(() => {
    const handMove = () => {
      setWait(true);
      console.log("handMove");
      props.rmove();
    };
    ref.current.addEventListener("mouseup", handMove);
    return () => {
      ref.current.removeEventListener("mouseup", handMove);
    };
  }, []);

  let divStyle = {};

  const handleDrop = () => {
    setDropping({
      x: isDropping.x + 0.5,
      y: 50,
    });
  };

  if (wait) {
    divStyle = {
      top: `${isDropping.x}px`,
      left: `${isDropping.y}%`,
    };

    if (isDropping.x < 650) {
      setTimeout(handleDrop, 4);
    } else {
      setDropping({
        x: 0,
        y: 50,
      });
    }
  } else {
    divStyle = {
      top: `${props.axis.y}%`,
      left: `${props.axis.x}%`,
    };
  }

  return <Object ref={ref} className="garbage" style={divStyle} />;
};

const Object = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 50%;
  left: 50%;
`;

export default Garbage;
