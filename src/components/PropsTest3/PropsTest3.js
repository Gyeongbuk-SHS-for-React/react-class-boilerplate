import React from "react";
import { Typography } from "antd";
import "./styles.css";

const PropsTest3 = () => {
  return (
    <>
      <Typography.Title>
        Card 컴포넌트로 분리 후 children props로 전달해보세요.
      </Typography.Title>
      <div>
        <div className="card">
          <div className="card-content">
            <h1>Photo</h1>
            <img
              className="avatar"
              src="https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005101.png"
              alt="digda"
              width={70}
              height={70}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h1>About</h1>
            <p>
              디그다 디그다 닥트닥트닥 디그다 디그다 닥트닥트닥 디그다 디그다
              닥트닥트닥 디그다 디그다 닥트닥트닥
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropsTest3;
