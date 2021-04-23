/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Heading from "../components/Heading";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FormEventHandler, useEffect, useRef } from "react";
import emailjs, { init } from "emailjs-com";

const Contact = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    init(`${process.env.REACT_APP_MAIL_KEY}`);
  }, []);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alert(`Thank you for your message from ${emailRef.current?.value}`);
    emailjs
      .send(
        `${process.env.REACT_APP_MAIL_SERVICEID}`,
        `${process.env.REACT_APP_MAIL_TEMPLATEID}`,
        {
          from_name: nameRef.current?.value,
          message_html: messageRef.current?.value,
          reply_to: emailRef.current?.value,
        },
        `${process.env.REACT_APP_MAIL_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    nameRef.current!.value = "";
    messageRef.current!.value = "";
    emailRef.current!.value = "";
  };
  return (
    <div css={style}>
      <Heading title="Contact" color="#f5f5f5" />
      <p>Have a question?</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Name" ref={nameRef} />
        <input type="email" placeholder="Your Email" ref={emailRef} />
        <textarea placeholder="Your Message" ref={messageRef} />
        <input type="submit" className="submit" value="Submit" />
      </form>
      <div className="contactList">
        <a
          href="https://www.facebook.com/profile.php?id=100010845521664"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF className="icon" />
        </a>
        <a
          href="https://www.instagram.com/ln.seo/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/%EC%9D%B8%EC%84%9C-%ED%99%A9-04582720a/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className="icon" />
        </a>
      </div>
    </div>
  );
};

const style = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #4d4646;
  width: 100%;
  height: 100vh;
  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #81b58f;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  form {
    width: 40rem;
  }
  input,
  textarea {
    background-color: #403a3a;
    font-size: 1rem;
    border: 0;
    padding: 10px 15px;
    margin-bottom: 0.5rem;
    height: 2rem;
    color: #f5f5f5;
  }
  textarea {
    resize: none;
    height: 15rem;
  }
  .submit {
    width: 9rem;
    height: 3.5rem;
    font-size: 1.6rem;
    margin-left: auto;
    background-color: #403a3a;
    color: #f5f5f5;
    border: 3px solid #f5f5f5;
    cursor: pointer;
    transition: all ease 0.3s;
  }
  .submit:hover {
    border: 3px solid #81b58f;
    background-color: #81b58f;
  }
  .contactList {
    margin-top: 5rem;
    width: 40rem;
    display: flex;
    justify-content: center;
  }
  a {
    margin: 0 2rem;
  }
  .icon {
    padding: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    color: #f5f5f5;
    background-color: #403a3a;
    transition: all ease 0.25s;
  }
  .icon:hover {
    transform: scale(0.92);
    background-color: #81b58f;
  }
`;

export default Contact;
