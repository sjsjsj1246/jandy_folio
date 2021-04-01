/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const Portfolio = () => {
  return (
    <div css={style}>
      <h1>PortFolio</h1>
    </div>
  );
};

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100vh;
  h1 {
    margin: 0;
  }
`;

export default Portfolio;
