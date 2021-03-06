/**
 * @author Abdul halith
 * @email abd.halith994@gmail.com
 * @create date 2020-11-27
 * @modify date 2021-02-03
 * @desc withNavBars HOC will give you the Navbars (Top/Bottom Navbars)
 */

import React from "react";
import { makeStyles } from "@material-ui/core";
import { SideNavBar } from "../components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    width: "100%",
    // height: "calc(100vh - 64px)",
    height: "100vh",
    overflow: "auto",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 56,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  },
  topNavbar: {},
  sideNavbar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const withNavBars = (Component) => (props) => {
  const classes = useStyles({ props });

  return (
    <div className={classes.root}>
      {/* Your nav bars here */}
      {/* <div className={classes.topNavbar}>
        <TopNavBar />
      </div> */}

      {
        <div className={classes.sideNavbar}>
          <SideNavBar />
        </div>
      }

      {/* Content */}
      <div className={classes.content}>
        <Component {...props}>{props.children}</Component>
      </div>
    </div>
  );
};

export default withNavBars;
