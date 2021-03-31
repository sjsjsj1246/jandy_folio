/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { Paper, Tab, Tabs, TabsClassKey } from "@material-ui/core";
import { ClassNameMap, withStyles } from "@material-ui/styles";
import React, { ChangeEvent, ReactNode, useState } from "react";

type NavProps = {
  /**Navigation 커스텀 스타일입니다.. */
  classes: Partial<ClassNameMap<TabsClassKey>>;
};

const Nav = ({ classes }: NavProps) => {
  const [position, setPosition] = useState(0);
  return (
    <Paper>
      <Tabs
        value={position}
        onChange={(e: ChangeEvent<{}>, next: any) => {
          setPosition(next);
        }}
        textColor="inherit"
        variant="standard"
        aria-label="nav tabs"
        css={[navStyle]}
        classes={{ indicator: classes.indicator }}
      >
        <Tab label="HOME"></Tab>
        <Tab label="ABOUT"></Tab>
        <Tab label="PROTFOLIO"></Tab>
      </Tabs>
    </Paper>
  );
};

const navStyle = css`
  background-color: black;
  color: white;
`;

const TabsStyles = {
  indicator: {
    backgroundColor: "white",
  },
};

export default withStyles(TabsStyles)(Nav);
