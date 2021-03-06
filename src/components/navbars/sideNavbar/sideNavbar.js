/**
 * @author Abdul halith
 * @email abd.halith994@gmail.com
 * @create date 2021-01-25
 * @modify date 2021-01-29
 * @desc Side Nav bar
 */

import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavBarArr } from "../../../utils";
import { matchPath, useHistory } from "react-router-dom";

const drawerWidth = 56;

const useStyles = makeStyles((theme) => ({
  root: {
    width: (props) => (props?.isMobile ? 240 : drawerWidth),
    position: "absolute",
    "& .MuiPaper-root": {
      backgroundColor: "#161616",
    },
  },
  drawer: {
    // height: props => props?.isMobile ? `100vh` : `calc(100vh - 64px)`,
    height: (props) => (props?.isMobile ? `100vh` : `100vh`),
    width: (props) => (props?.isMobile ? 240 : drawerWidth),
  },
  drawerContainer: {
    overflow: "hidden",
  },
}));

export const SideNavBar = (props) => {
  const classes = useStyles(props);

  const history = useHistory();

  const isSelected = (data) => {
    if (data.link) {
      return matchPath(history.location.pathname, {
        path: data.link,
      });
    }
  };

  const onListClick = (data) => {
    if (data.link) {
      history.push(data.link);
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.drawer} square>
        <div className={classes.drawerContainer}>
          <Typography variant="caption" style={{ color: "white" }}>
            Company Logo
          </Typography>
          <List>
            {NavBarArr.map((navBar, index) => (
              <ListItem
                onClick={(e) => onListClick(navBar)}
                button
                key={index}
                selected={isSelected(navBar)}
              >
                <ListItemIcon>{navBar.icon}</ListItemIcon>

                <ListItemText primary={navBar.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Paper>
    </div>
  );
};
