import React from "react";
import { Typography } from "antd";

function Gallery() {
  return (
    <div>
      <section className="profile">
        <h2>이상해씨</h2>
        <img
          className="avatar"
          src={
            "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000101.png"
          }
          alt="Bulbasur"
          width={150}
          height={150}
        />
        <ul>
          <li>
            <b>속성 </b>
            풀, 독
          </li>
          <li>
            <b>기술 </b>
            덩쿨채찍, 솔라빔
          </li>
          <li>
            <b>진화 </b>
            이상해씨 {">"} 이상해풀 {">"} 이상해꽃
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>파이리</h2>
        <img
          className="avatar"
          src={
            "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000401.png"
          }
          alt="Charmander"
          width={150}
          height={150}
        />
        <ul>
          <li>
            <b>속성 </b>불꽃
          </li>
          <li>
            <b>기술</b>
            회오리 불꽃, 오버히트
          </li>
          <li>
            <b>진화 </b>
            파이리 {">"} 리자드 {">"} 리자몽
          </li>
        </ul>
      </section>
    </div>
  );
}

const PropsTest = () => {
  return (
    <>
      <Typography.Title>
        Gallery 컴포넌트의 동일한 내용들을 하나의 컴포넌트로 분리하고 props로
        전달해보세요.
      </Typography.Title>
      <Gallery></Gallery>;
    </>
  );
};

export default PropsTest;
