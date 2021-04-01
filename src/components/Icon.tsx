/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Grid } from "@material-ui/core";

type IconProps = {
  title?: string;
  size: "small" | "medium" | "big";
  backgroundColor?: string;
  imgSrc?: string;
  description?: string;
  disableDes?: boolean;
};

const Icon = ({
  title,
  size,
  backgroundColor,
  imgSrc,
  description,
  disableDes,
}: IconProps) => {
  return (
    <Grid alignItems="center" item xs={2} css={[style]}>
      <Avatar src={imgSrc} alt={title} css={sizes[size]} />
      {!disableDes && (
        <Description css={sizes[size]}>
          <h3>{title}</h3>
          <p>{description}</p>
        </Description>
      )}
    </Grid>
  );
};
Icon.defaultProps = {
  title: "",
  size: "medium",
  backgroundColor: "#B5B5B5",
  disableDes: false,
};

const style = css`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const sizes = {
  small: css`
    width: 70px;
    height: 70px;
  `,
  medium: css`
    width: 100px;
    height: 100px;
    h3 {
      font-size: 1rem;
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

const Avatar = styled.img({
  borderRadius: "10%",
  boxShadow: "3px 3px 10px 0px rgba(0, 0, 0, 0.75)",
});

const Description = styled.div({
  borderRadius: "10%",
  color: "white",
  backgroundColor: "black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  textAlign: "center",
  transform: "translateY(-100px)",
  opacity: "0",
  transition: "all 0.3s ease",
  h3: {
    margin: "1rem 0 ",
  },
  p: {
    margin: "0 auto",
    marginBottom: "1rem",
  },
  ":hover": {
    opacity: "0.85",
  },
});

export default Icon;
