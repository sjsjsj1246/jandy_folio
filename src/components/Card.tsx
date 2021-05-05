/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

type CardProps = {
  title?: string;
  tag?: string;
  size: "small" | "medium" | "big";
  backgroundColor?: string;
  imgUrl?: string;
  description?: string;
  disableDes?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Card = ({
  title,
  size,
  backgroundColor,
  imgUrl,
  description,
  disableDes,
  onClick,
  tag,
}: CardProps) => {
  return (
    <div css={[style, sizes[size]]}>
      <CardImg src={imgUrl} alt={title} css={sizes[size]} />
      {!disableDes && (
        <Description css={sizes[size]}>
          <div className="title">
            <h3>{title}</h3>
            <p>{tag}</p>
          </div>
          <button onClick={onClick}>{description}</button>
        </Description>
      )}
    </div>
  );
};
Card.defaultProps = {
  title: "",
  size: "medium",
  backgroundColor: "#B5B5B5",
  disableDes: false,
};

const style = css`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const sizes = {
  small: css`
    width: 70px;
    height: 70px;
  `,
  medium: css`
    width: 20rem;
    height: 14rem;
    .title {
      font-size: 1.5rem;
    }
    button {
      font-size: 1rem;
    }
  `,
  big: css`
    width: 130px;
    height: 130px;
  `,
};

const CardImg = styled.img({
  objectFit: "cover",
  flexShrink: 0,
});

const Description = styled.div({
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  textAlign: "center",
  opacity: "0",
  transform: "translateY(-14rem)",
  transition: "all 0.3s ease",
  ".title": {
    height: "7rem",
    margin: "2rem 0 0 0 ",
    transition: "all 0.3s ease",
    transform: "translateY(-50px)",
    opacity: "0",
    h3: {
      color: "#403a3a",
      margin: "0.1rem 0",
      fontsize: "1em",
    },
    p: {
      margin: "0",
      fontsize: "0.8em",
      color: "#81B58F",
    },
  },
  button: {
    width: "8rem",
    height: "3rem",
    margin: "0 0 2rem 0",
    border: "3px solid #81B58F",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
    color: "#403a3a",
    transform: "translateY(20px)",
    opacity: "0",
    ":hover": {
      color: "white",
      fontWeight: "bold",
      backgroundColor: "#81B58F",
    },
  },
  ":hover": {
    opacity: "0.85",
    button: {
      transform: "translateY(0px)",
      opacity: "1",
    },
    ".title": {
      transform: "translateY(0px)",
      opacity: "1",
    },
  },
});

export default Card;
