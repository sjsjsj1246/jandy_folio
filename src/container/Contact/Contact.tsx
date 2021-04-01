/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const Contact = () => {
  return (
    <div css={style}>
      <h1>Contact</h1>
    </div>
  );
};

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;
  h1 {
    margin: 0;
  }
`;

export default Contact;
