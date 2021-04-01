/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

type HeadingProps = {
  /**Heading 안의 내용입니다. */
  title: string;
  /**Heading의 크기입니다. */
  size: "small" | "medium" | "big";
  /**Heading의 색상입니다. */
  color: string;
  /**ClassName Prop입니다. */
  className?: string;
};

const Heading = ({ title, size, color, className }: HeadingProps) => {
  return (
    <div css={[style, sizes[size]]} className={className}>
      <h2>{title}</h2>
      <hr />
    </div>
  );
};
Heading.defaultProps = {
  size: "medium",
  color: "black",
};

const style = css`
  h2 {
    text-align: center;
    margin: 0;
  }
  hr {
    margin-top: 0.2rem;
    margin-bottom: 2rem;
    width: 70%;
    height: 3px;
    border: 0px;
    background-color: black;
  }
`;

const sizes = {
  small: css`
    font-size: 1.5rem;
  `,
  medium: css`
    font-size: 1.5rem;
  `,
  big: css`
    font-size: 2rem;
  `,
};

export default Heading;
