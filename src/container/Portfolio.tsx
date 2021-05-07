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
    "https://i.postimg.cc/R0JmWf8b/Kakao-Talk-Photo-2021-05-08-02-46-54-2.png",
    "https://i.postimg.cc/Z5MZYjfd/Kakao-Talk-Photo-2021-05-08-02-46-54-5.png",
    "https://i.postimg.cc/yYnst7cn/Kakao-Talk-Photo-2021-05-08-02-46-54-4.png",
    "https://i.postimg.cc/zGB814kN/Kakao-Talk-Photo-2021-05-08-02-46-54-3.png",
    "https://i.postimg.cc/mkyBbsqL/Kakao-Talk-Photo-2021-05-08-02-46-54-1.png",
    "https://i.postimg.cc/jdRRMDwL/Kakao-Talk-Photo-2021-05-08-02-46-54-6.png",
    "https://i.postimg.cc/c1Rs7RJp/Kakao-Talk-Photo-2021-05-08-02-46-54-7.png",
  ];
  return (
    <div css={style}>
      <Heading title="PortFolio" className="portfolioTitle" />
      <div className="portGrid">
        <Dialog
          visible={toggle}
          title="우리은행 해커톤"
          subTitle="React / Redux"
          description="2021년 우리은행 온택트 해커톤에서 프론트엔드 분야를 맡았고 장려상을 수상했습니다."
          url="https://github.com/woori-hippy/hippy_front"
        >
          <Slide easing="ease" transitionDuration="500">
            {slideImages.map((url) => (
              <div className="each-slide">
                <div style={{ height: "fit-content" }}>
                  <img
                    src={`${url}`}
                    alt="img"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            ))}
          </Slide>
        </Dialog>
        <Card
          title="우리은행 해커톤"
          tag="React / Redux"
          description="LEARN MORE"
          imgUrl="https://i.postimg.cc/R0JmWf8b/Kakao-Talk-Photo-2021-05-08-02-46-54-2.png"
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
    width: 66rem;
    height: fit-content;
    @media (max-width: 568px) {
      width: 44rem;
    }
  }
  .des {
  }
`;

export default Portfolio;
