/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

type CardProps = {
  title?: string;
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
}: CardProps) => {
  return (
    <div css={[style, sizes[size]]}>
      <CardImg src={imgUrl} alt={title} css={sizes[size]} />
      {!disableDes && (
        <Description css={sizes[size]}>
          <h3>{title}</h3>
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
`;

const sizes = {
  small: css`
    width: 70px;
    height: 70px;
  `,
  medium: css`
    width: 20rem;
    height: 14rem;
    h3 {
      font-size: 2rem;
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
  color: "#403a3a",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  textAlign: "center",
  opacity: "0",
  transform: "translateY(-14rem)",
  transition: "all 0.3s ease",
  h3: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "8rem",
    margin: "1rem 0 ",
    transition: "all 0.3s ease",
    transform: "translateY(-50px)",
    opacity: "0",
  },
  button: {
    width: "8rem",
    height: "3rem",
    margin: "0.5rem 0",
    border: "3px solid #403a3a",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
    transition: "all 0.3s ease",
    transform: "translateY(20px)",
    opacity: "0",
    ":hover": {
      color: "white",
      backgroundColor: "#403a3a",
    },
  },
  ":hover": {
    opacity: "0.85",
    button: {
      transform: "translateY(0px)",
      opacity: "1",
    },
    h3: {
      transform: "translateY(0px)",
      opacity: "1",
    },
  },
});

export default Card;
