import { useState } from "react";
import styled from "styled-components";

const Garbage = (props) => {
  const [isDropping, setDropping] = useState(0.5);

  const divStyle = {
    // top: `${isDropping}px`,
    top: `${props.axis.y}%`,
    left: `${props.axis.x}%`,
  };

  const handleDrop = () => {
    setDropping(isDropping + 0.5);
  };

  if (props.click) {
    if (isDropping < 650) {
      setTimeout(handleDrop, 4);
    } else {
      setDropping(0);
    }
  }
  return <Object className="garbage" style={divStyle} />;
};

const Object = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 50%;
`;

export default Garbage;
