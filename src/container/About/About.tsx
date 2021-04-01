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
          <p>안녕하세요^^</p>
        </div>
      </div>
      <Heading title="Skills" className="skillsTitle" />
      <Grid
        container
        direction="column"
        justify="center"
        spacing={3}
        className="skillGrid"
      >
        <Grid item xs={12} className="skillList">
          <h2 className="skillTitle">publishing</h2>
          <Grid container direction="row" justify="center" className="skill">
            <Icon
              title="JavaScript"
              imgSrc="https://i.postimg.cc/3w2Pk3wy/image.png"
              description="familiar"
            />
            <Icon
              title="React"
              imgSrc="https://i.postimg.cc/B6TbZg7D/1-mr-OXGy-Ia3-Bl-PK80pe-Lm-Eb-A.png"
              description="familiar"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} className="skillList">
          <h2 className="skillTitle">Font End</h2>
          <Grid container direction="row" justify="center" className="skill">
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
          </Grid>
        </Grid>
        <Grid item xs={12} className="skillList">
          <h2 className="skillTitle">Back End</h2>
          <Grid container direction="row" justify="center" className="skill">
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
          </Grid>
        </Grid>
        <Grid item xs={12} className="skillList">
          <h2 className="skillTitle">ETC</h2>
          <Grid container direction="row" justify="center" className="skill">
            <Icon
              title="git"
              imgSrc="https://i.postimg.cc/tgM6L2Zz/git-thumnail.png"
              description="familiar"
            />

            <Icon
              title="Algorithm with C++"
              imgSrc="https://i.postimg.cc/MGZ7h8Lk/neural.png"
              description="familiar"
            />
            <Icon
              title="StoryBook"
              imgSrc="https://i.postimg.cc/brb10kv9/storybook.png"
              description="tried"
            />
            <Icon
              title="Unity"
              imgSrc="https://i.postimg.cc/MTV0jk9X/2.png"
              description="tried"
            />
            <Icon
              title="DataScience with Python"
              imgSrc="https://i.postimg.cc/8CWwLr51/deep-learning-1.png"
              description="tried"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const style = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
  padding-bottom: 5rem;
  .aboutMe {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    .aboutTitle {
      margin: 10rem;
    }
  }
  .skillsTitle {
    margin-top: 5rem;
  }
  .skillTitle {
    font-size: 1.5rem;
    text-align: center;
  }
  .skillGrid {
    width: 80%;
  }
  .skillList {
  }
  /* .skillList:nth-child(odd) {
    background-color: #c6ccc8;
  }
  .skillList:nth-child(even) {
    background-color: #f5f5f5;
  } */
  .skill {
    height: 100px;
  }
`;

export default About;
