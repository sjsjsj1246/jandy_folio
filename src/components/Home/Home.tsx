/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

type HomeProps = {
  title: string;
  backgroundImgUrl: string;
};

const Home = ({ title, backgroundImgUrl }: HomeProps) => {
  return (
    <div css={style}>
      <h1>{title}</h1>
      <img src={backgroundImgUrl} alt="" />
    </div>
  );
};
Home.defaultProps = {
  title: "세상에 가치를 더하는 코드를 만듭니다.",
  backgroundImgUrl: "https://i.postimg.cc/LXNRkJXK/sky.jpg",
};
const style = css`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0%;
    left: 0%;
    z-index: -1;
  }
  h1 {
    color: white;
    z-index: 1;
    margin: 0;
  }
`;

export default Home;
