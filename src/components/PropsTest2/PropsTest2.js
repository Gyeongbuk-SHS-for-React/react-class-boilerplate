import React from "react";
import { Typography } from "antd";

function PocketMon({ pocketmon, size = 50 }) {
  return (
    <img
      alt={pocketmon.name}
      src={"https://data1.pokemonkorea.co.kr/newdata/pokedex/full/014301.png"}
      width={size}
      height={size}
    />
  );
}

function Profile() {
  return (
    <PocketMon
      pocketmon={{
        name: "잠만보",
      }}
    />
  );
}

const PropsTest2 = () => {
  return (
    <>
      <Typography.Title>
        PocketMon 컴포넌트에 size props를 전달해서 대형 잠만보를 만들어보세요.
      </Typography.Title>
      <Profile></Profile>
    </>
  );
};

export default PropsTest2;
