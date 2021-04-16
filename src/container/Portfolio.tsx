/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Card from "../components/Card";
import Heading from "../components/Heading";

const Portfolio = () => {
  return (
    <div css={style}>
      <Heading title="PortFolio" className="portfolioTitle" />
      <div className="portGrid">
        <Card
          title="Test"
          description="des test"
          imgUrl="https://cdn.pixabay.com/photo/2014/07/01/12/35/taxi-381233__340.jpg"
        />
        <Card
          title="Test"
          description="des test"
          imgUrl="https://cdn.pixabay.com/photo/2017/01/17/17/05/spaghetti-1987454__340.jpg"
        />
        <Card
          title="Test"
          description="des test"
          imgUrl="https://cdn.pixabay.com/photo/2017/10/27/15/12/geeks-2894621__340.jpg"
        />
        <Card
          title="Test"
          description="des test"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1StBs4YAnkQrJV0FRCg5ETff69plaDMlgA&usqp=CAU"
        />
      </div>
    </div>
  );
};

const style = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;
  .portfolioTitle {
    margin: 5rem 0;
  }
  .portGrid {
    display: flex;
    flex-wrap: wrap;
    width: 840px;
    height: fit-content;
  }
  .des {
  }
`;

export default Portfolio;
