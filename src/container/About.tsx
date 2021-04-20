/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Heading from "../components/Heading";
import Icon from "../components/Icon";
import { useState } from "react";

const About = () => {
  const [skills, useSkills] = useState([
    {
      title: "Language",
      stack: [
        {
          title: "JavaScript",
          des: "familiar",
          imgURL: "https://i.postimg.cc/3w2Pk3wy/image.png",
        },
        {
          title: "TypeScript",
          des: "tried",
          imgURL: "https://i.postimg.cc/nVPBpbGf/typescript.png",
        },
        {
          title: "C++",
          des: "familiar",
          imgURL: "https://i.postimg.cc/Tw7yHfjp/Cplusplus.jpg",
        },
        {
          title: "Java",
          des: "tried",
          imgURL: "https://i.postimg.cc/7bvZp65Y/java.webp",
        },
        {
          title: "Python",
          des: "tried",
          imgURL: "https://i.postimg.cc/25jhHcp9/python.png",
        },
      ],
    },
    {
      title: "Font End",
      stack: [
        {
          title: "React",
          des: "familiar",
          imgURL:
            "https://i.postimg.cc/B6TbZg7D/1-mr-OXGy-Ia3-Bl-PK80pe-Lm-Eb-A.png",
        },
        {
          title: "React-Naitive",
          des: "tried",
          imgURL: "https://i.postimg.cc/NLq5QnB1/React-js-logo-512.png",
        },
        {
          title: "Emotion",
          des: "familiar",
          imgURL: "https://i.postimg.cc/0N21KCND/emotion.png",
        },
        {
          title: "Gatsby",
          des: "tried",
          imgURL: "https://i.postimg.cc/1Rpmvnv6/image.png",
        },
      ],
    },
    {
      title: "Back End",
      stack: [
        {
          title: "Node",
          des: "tried",
          imgURL:
            "https://i.postimg.cc/QtJGyjGL/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6261746e30353030302f696d6167652f75706c6f61642f.png",
        },
        {
          title: "Express",
          des: "tried",
          imgURL: "https://i.postimg.cc/xT08Kr6h/Express.png",
        },
        {
          title: "Koa",
          des: "tried",
          imgURL: "https://i.postimg.cc/CxxxXW18/koa.png",
        },
      ],
    },
    {
      title: "ETC",
      stack: [
        {
          title: "git",
          des: "familiar",
          imgURL: "https://i.postimg.cc/tgM6L2Zz/git-thumnail.png",
        },
        {
          title: "Unity",
          des: "tried",
          imgURL: "https://i.postimg.cc/MTV0jk9X/2.png",
        },
        {
          title: "StoryBook",
          des: "tried",
          imgURL: "https://i.postimg.cc/brb10kv9/storybook.png",
        },
        {
          title: "Algorithm",
          des: "familiar",
          imgURL: "https://i.postimg.cc/MGZ7h8Lk/neural.png",
        },
        {
          title: "DataScience",
          des: "tried",
          imgURL: "https://i.postimg.cc/8CWwLr51/deep-learning-1.png",
        },
      ],
    },
  ]);
  return (
    <div id="About" css={style}>
      <div className="aboutMe">
        <Heading title="About Me" className="aboutTitle" />
        <div className="description">
          <h3>성장하는 개발자</h3>
          <p>
            안녕하세요, 서울 과학 기술대에 재학하고 있고 풀스택 개발자로 일하고
            있는 황인서입니다. <br /> 사회가 필요로 하는 가치를 창출하기 위해
            매일 더 나은 기술을 공부하고 고민하고 있습니다.
          </p>
        </div>
      </div>
      <div className="skills">
        <Heading title="Skills" className="skillsTitle" />
        <div className="skillGrid">
          {skills.map((skillList) => (
            <div className="skillList">
              <h2 className="skillTitle">{skillList.title}</h2>
              <div className="skill">
                {skillList.stack.map((skill) => (
                  <Icon
                    title={skill.title}
                    imgUrl={skill.imgURL}
                    description={skill.des}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const style = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-bottom: 3rem;
  width: 100%;
  color: #403a3a;
  .aboutMe {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    .aboutTitle {
      margin: 8rem 5rem 8rem 0;
    }
  }
  .skills {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .skillsTitle {
      margin-top: 5rem;
      width: fit-content;
    }
    .skillGrid {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .skillList {
      width: 100%;
    }
    .skill {
      width: fit-content;
      display: flex;
    }
  }
`;

export default About;
