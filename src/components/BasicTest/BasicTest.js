import React from "react";
import "./BasicTest.css";

function Profile() {
  return <img src="https://i.imgur.com/juZg4rW.jpeg" alt="cat" />;
}

function profile() {
  const baseUrl = "https://i.imgur.com/";
  const imgName = "aGBig2i";
  const extension = ".jpeg";

  return (
    <>
      <img
        src="https://yt3.ggpht.com/AJ15EuYg8Dg4u4ov-kKkP5rRzUgDAJELoMhu6YLGTVQzc_TQfD6RCCHEQX4Bpeelvsk9mRhqfxM=s900-c-k-c0x00ffffff-no-rj"
        alt="cat2"
        class="sangsoo"
      ></img>
      <img className="avatar" src="{baseUrl}{imgName}{extension}" alt="dog" />
    </>
  );
}

const BasicTest = () => {
  return (
    <>
      <Profile></Profile>;<profile></profile>
    </>
  );
};

export default BasicTest;
