/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { Paper, Tab, Tabs, TabsClassKey } from "@material-ui/core";
import { ClassNameMap, withStyles } from "@material-ui/styles";
import React, { ChangeEvent, ReactNode, useEffect, useState } from "react";

type NavProps = {
  classes: Partial<ClassNameMap<TabsClassKey>>;
  homeRef?: React.RefObject<HTMLDivElement>;
  aboutRef?: React.RefObject<HTMLDivElement>;
  portfolioRef?: React.RefObject<HTMLDivElement>;
  contactRef?: React.RefObject<HTMLDivElement>;
};

const Nav = ({
  classes,
  homeRef,
  aboutRef,
  portfolioRef,
  contactRef,
}: NavProps) => {
  const [position, setPosition] = useState(0);
  const handleScroll: EventListenerOrEventListenerObject = () => {
    const currentScrollPosition = window.pageYOffset;
    const homePosition =
      currentScrollPosition +
      (homeRef?.current?.getBoundingClientRect().top || 0);
    const aboutPosition =
      currentScrollPosition +
      (aboutRef?.current?.getBoundingClientRect().top || 0);
    const portfolioPosition =
      currentScrollPosition +
      (portfolioRef?.current?.getBoundingClientRect().top || 0);
    const contactPosition =
      currentScrollPosition +
      (contactRef?.current?.getBoundingClientRect().top || 0);

    if (currentScrollPosition >= homePosition) setPosition(0);
    if (currentScrollPosition >= aboutPosition - 50) setPosition(1);
    if (currentScrollPosition >= portfolioPosition - 50) setPosition(2);
    if (currentScrollPosition >= contactPosition - 50) setPosition(3);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Tabs
      value={position}
      onChange={(e: ChangeEvent<{}>, next: any) => {
        setPosition(next);
      }}
      textColor="inherit"
      variant="standard"
      aria-label="nav tabs"
      css={[navStyle, position && navTopStyle]}
      classes={{ indicator: classes.indicator }}
    >
      <Tab
        label="HOME"
        onClick={() => {
          homeRef?.current?.scrollIntoView();
        }}
      ></Tab>
      <Tab
        label="ABOUT"
        onClick={() => {
          aboutRef?.current?.scrollIntoView();
        }}
      ></Tab>
      <Tab
        label="PORTFOLIO"
        onClick={() => {
          portfolioRef?.current?.scrollIntoView();
        }}
      ></Tab>
      <Tab
        label="CONTACT"
        onClick={() => {
          contactRef?.current?.scrollIntoView();
        }}
      ></Tab>
    </Tabs>
  );
};

const navStyle = css`
  background-color: #403a3a;
  color: white;
  height: 5vh;
  .Mui-selected {
    color: #9ad9ac;
  }
`;

const navTopStyle = css`
  width: 100%;
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 1;
`;

const TabsStyles = {
  indicator: {
    backgroundColor: "#403a3a",
  },
};

export default withStyles(TabsStyles)(Nav);
