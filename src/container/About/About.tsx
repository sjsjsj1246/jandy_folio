/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Heading from "../../components/Heading";
import Icon from "../../components/Icon";
import { Grid } from "@material-ui/core";

const About = () => {
  return (
    <div id="About" css={style}>
      <div className="aboutMe">
        <Heading title="About Me" className="aboutTitle" />
        <div className="description">
          <h3>성장하는 개발자</h3>
          <p>
            안녕하세요, 서울 과학 기술대에 재학하고 있고 풀스택 개발자로 일하고
            있는 황인서입니다. <br /> 사회가 필요로 하는 가치를 창출하기 위해
            매일 더 나은 기술을 공부하고 고민하고 있습니다. <br />
          </p>
        </div>
      </div>
      <Heading title="Skills" className="skillsTitle" />
      <div className="skillGrid">
        <div className="skillList">
          <h2 className="skillTitle">Language</h2>
          <div className="skill">
            <Icon
              title="JavaScript"
              imgSrc="https://i.postimg.cc/3w2Pk3wy/image.png"
              description="familiar"
            />
            <Icon
              title="TypeScript"
              imgSrc="https://i.postimg.cc/nVPBpbGf/typescript.png"
              description="tried"
            />
            <Icon
              title="C++"
              imgSrc="https://i.postimg.cc/Tw7yHfjp/Cplusplus.jpg"
              description="familiar"
            />
            <Icon
              title="Java"
              imgSrc="https://i.postimg.cc/7bvZp65Y/java.webp"
              description="tried"
            />
            <Icon
              title="Python"
              imgSrc="https://i.postimg.cc/25jhHcp9/python.png"
              description="tried"
            />
          </div>
        </div>
        <div className="skillList">
          <h2 className="skillTitle">Font End</h2>
          <div className="skill">
            <Icon
              title="React"
              imgSrc="https://i.postimg.cc/B6TbZg7D/1-mr-OXGy-Ia3-Bl-PK80pe-Lm-Eb-A.png"
              description="familiar"
            />
            <Icon
              title="React-Naitive"
              imgSrc="https://i.postimg.cc/NLq5QnB1/React-js-logo-512.png"
              description="tried"
            />
            <Icon
              title="emotion"
              imgSrc="https://i.postimg.cc/0N21KCND/emotion.png"
              description="tried"
            />
            <Icon
              title="Android"
              imgSrc="https://i.postimg.cc/NGX9xq9f/android.webp"
              description="tried"
            />
          </div>
        </div>
        <div className="skillList">
          <h2 className="skillTitle">Back End</h2>
          <div className="skill">
            <Icon
              title="Node"
              imgSrc="https://i.postimg.cc/QtJGyjGL/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6261746e30353030302f696d6167652f75706c6f61642f.png"
              description="tried"
            />
            <Icon
              title="Express"
              imgSrc="https://i.postimg.cc/xT08Kr6h/Express.png"
              description="tried"
            />
            <Icon
              title="Koa"
              imgSrc="https://i.postimg.cc/CxxxXW18/koa.png"
              description="tried"
            />
          </div>
        </div>
        <div className="skillList">
          <h2 className="skillTitle">ETC</h2>
          <div className="skill">
            <Icon
              title="git"
              imgSrc="https://i.postimg.cc/tgM6L2Zz/git-thumnail.png"
              description="familiar"
            />
            <Icon
              title="Unity"
              imgSrc="https://i.postimg.cc/MTV0jk9X/2.png"
              description="tried"
            />
            <Icon
              title="StoryBook"
              imgSrc="https://i.postimg.cc/brb10kv9/storybook.png"
              description="tried"
            />
            <Icon
              title="Algorithm"
              imgSrc="https://i.postimg.cc/MGZ7h8Lk/neural.png"
              description="familiar"
            />
            <Icon
              title="DataScience"
              imgSrc="https://i.postimg.cc/8CWwLr51/deep-learning-1.png"
              description="tried"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const style = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f5f5f5;
  padding-bottom: 2rem;
  width: 100%;
  .aboutMe {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    .aboutTitle {
      margin: 10rem 10rem 10rem 15%;
    }
    .description {
      width: 40%;
    }
  }
  .skillsTitle {
    margin: 5rem auto 0 15%;
  }
  .skillTitle {
    font-size: 1.5rem;
    text-align: left;
  }
  .skillGrid {
    width: 85%;
    margin-left: 15%;
  }
  .skillList {
    display: flex;
    flex-direction: column;
  }
  .skill {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export default About;
