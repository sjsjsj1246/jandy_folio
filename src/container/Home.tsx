/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import "fontsource-noto-sans-kr";
import "fontsource-roboto";

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
  imgUrl: "https://i.postimg.cc/KvscQh2j/coding-924920-1920.jpg",
};
const style = css`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  @media (max-width: 568px) {
    height: 50vh;
  }
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
    width: 96%;
    margin: 0;
    font-size: 6rem;
    letter-spacing: 0.5rem;
    color: #f6f5ff;
    text-shadow: 1px 1px 2px #53565c;
    position: absolute;
    left: 4%;
    top: 55%;
    @media (max-width: 568px) {
      top: 25%;
      height: 50vh;
    }
    white-space: nowrap;
    overflow: hidden;
  }
  @media screen and (max-width: 110rem) {
    h1 {
      font-size: 4rem;
      letter-spacing: 0.3rem;
    }
  }
  @media screen and (max-width: 72rem) {
    h1 {
      font-size: 3rem;
      letter-spacing: 0.2rem;
    }
  }
`;

export default Home;
