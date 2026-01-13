import React, { useRef } from "react";

function RefComponent() {
  let refEle = useRef();
  return (
    <div ref={refEle}>
      <h3 style={{ textAlign: "center", fontSize: 100, color: "pink" }}>
        Hello Ati
      </h3>
      <span style={{ alignContent: "center", fontSize: 50, color: "pink" }}>
        Gift is coming soon ......
      </span>
    </div>
  );
}

export default RefComponent;
