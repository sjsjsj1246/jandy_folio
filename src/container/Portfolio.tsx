/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { MouseEventHandler, useState } from "react";
import Card from "../components/Card";
import Dialog from "../components/Dialog";
import Heading from "../components/Heading";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Portfolio = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setToggle(true);
    console.log(toggle);
  };
  document.body.onclick = () => {
    setToggle(false);
  };
  const slideImages = [
    "http://www.mkhealth.co.kr/news/photo/202010/50970_51164_4758.jpg",
    "http://www.mkhealth.co.kr/news/photo/202010/50970_51164_4758.jpg",
    "http://www.mkhealth.co.kr/news/photo/202010/50970_51164_4758.jpg",
  ];
  return (
    <div css={style}>
      <Heading title="PortFolio" className="portfolioTitle" />
      <div className="portGrid">
        <Dialog
          visible={toggle}
          title="hi"
          subTitle="subtitle"
          description="des"
        >
          <Slide easing="ease" transitionDuration="500">
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
                <span>Slide 3</span>
              </div>
            </div>
          </Slide>
        </Dialog>
        <Card
          title="Test"
          tag="react / node"
          description="LEARN MORE"
          imgUrl="https://cdn.pixabay.com/photo/2014/07/01/12/35/taxi-381233__340.jpg"
          onClick={handleToggle}
        />
        <Card
          title="Test"
          description="LEARN MORE"
          imgUrl="https://cdn.pixabay.com/photo/2017/01/17/17/05/spaghetti-1987454__340.jpg"
          onClick={handleToggle}
        />
        <Card
          title="Test"
          description="LEARN MORE"
          imgUrl="https://cdn.pixabay.com/photo/2017/10/27/15/12/geeks-2894621__340.jpg"
          onClick={handleToggle}
        />
        <Card
          title="Test"
          description="LEARN MORE"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1StBs4YAnkQrJV0FRCg5ETff69plaDMlgA&usqp=CAU"
          onClick={handleToggle}
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
  height: fit-content;
  padding: 5rem 0;
  .each-slide > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 350px;
  }

  .each-slide span {
    padding: 20px;
    font-size: 20px;
    background: #efefef;
    text-align: center;
  }
  .portfolioTitle {
    margin-bottom: 5rem 0;
  }
  .portGrid {
    display: flex;
    flex-wrap: wrap;
    width: 60rem;
    height: fit-content;
  }
  .des {
  }
`;

export default Portfolio;
