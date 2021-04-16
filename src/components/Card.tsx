/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

type CardProps = {
  title?: string;
  size: "small" | "medium" | "big";
  backgroundColor?: string;
  imgUrl?: string;
  description?: string;
  disableDes?: boolean;
};

const Card = ({
  title,
  size,
  backgroundColor,
  imgUrl,
  description,
  disableDes,
}: CardProps) => {
  return (
    <div css={[style, sizes[size]]}>
      <CardImg src={imgUrl} alt={title} css={sizes[size]} />
      {!disableDes && (
        <Description css={sizes[size]}>
          <h3>{title}</h3>
          <p>{description}</p>
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
    width: 280px;
    height: 200px;
    h3 {
      font-size: 2rem;
    }
    p {
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
  color: "black",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  opacity: "0",
  transform: "translateY(-200px)",
  transition: "all 0.3s ease",
  h3: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    margin: "1rem 0 ",
    transition: "all 0.3s ease",
    transform: "translateY(-50px)",
    opacity: "0",
  },
  p: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    marginBottom: "1rem",
    transition: "all 0.3s ease",
    transform: "translateY(50px)",
    opacity: "0",
  },
  ":hover": {
    opacity: "0.85",
    p: {
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
