import React, { useEffect } from "react";

const UseEffectTest = () => {
  useEffect(() => {
    console.log("effect 연습 공간");
  }, []);

  return <div></div>;
};

export default UseEffectTest;
