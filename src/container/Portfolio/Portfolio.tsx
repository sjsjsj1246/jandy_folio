/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Heading from "../../components/Heading";

const Portfolio = () => {
  return (
    <div css={style}>
      <Heading title="PortFolio" className="portfolioTitle" />
      <div className="portGrid"></div>
    </div>
  );
};

const style = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  width: 100%;
  height: 100vh;
  .portfolioTitle {
    margin: 5rem 0;
  }
`;

export default Portfolio;
