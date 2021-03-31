/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const About = () => {
  return (
    <div css={style}>
      <h1>About</h1>
    </div>
  );
};

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  width: 100%;
  height: 100vh;
  h1 {
    margin: 0;
  }
`;

export default About;
