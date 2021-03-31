/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import "fontsource-noto-sans-kr";
import "fontsource-roboto";
import { LegacyRef, MutableRefObject, useRef } from "react";

type HomeProps = {
  title: string;
  imgUrl: string;
};

const Home = ({ title, imgUrl }: HomeProps) => {
  return (
    <div id="Home" css={style}>
      <h1>{title}</h1>
      <img src={imgUrl} alt="" />
    </div>
  );
};
Home.defaultProps = {
  title: "세상에 가치를 더하는 코드를 만듭니다.",
  imgUrl:
    "https://pixabay.com/get/gd6c17533059d350f55a55614b61015172733f2d67e885e690f8d688a58e1e466d202115f556752470ee21d0e864020c3_1920.jpg",
};
const style = css`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    min-width: 100%;
    width: auto;
    min-height: 100%;
    height: auto;
    position: fixed;
    top: 0%;
    left: 0%;
    z-index: -1;
  }
  h1 {
    margin: 0;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 6rem;
    letter-spacing: 0.5rem;
    color: #e3ecfc;
    text-shadow: 1px 1px 2px #53565c;
    position: absolute;
    left: 4%;
    top: 55%;
  }
`;

export default Home;
