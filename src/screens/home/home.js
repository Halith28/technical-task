import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  Typography,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card,
  TextField,
  Link,
  Breadcrumbs,
  Avatar,
  InputAdornment,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
// import CheckboxTree from "react-checkbox-tree";
import BasicExample from "./sample";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import logo from "../../assets/Group 1909.png";
import { Notifications, HomeOutlined, Search } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import profileicon from "../../assets/profileicon.png";
import ModalComp from "../../components/modalComp";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "40px 100px",
    "& .MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline": {
      borderColor: "#2B2B2B !important",
    },
    "& .MuiOutlinedInput-root.Mui-focuse.MuiOutlinedInput-notchedOutline": {
      borderColor: "#2B2B2B",
    },
    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: "#00aeef !important",
    },
    "& .MuiTypography-h3": {
      fontWeight: 300,
    },
  },
  card: {
    width: "100%",
    padding: 20,
    color: "#E6E7E8 !important",
    backgroundColor: "#2B2B2B",
  },
  autocomplete: {
    "& .MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline": {
      borderColor: "#2B2B2B !important",
    },
  },
  breadcrumbPrimary: {
    color: "white",
  },
  topBar: {
    marginBottom: "20px",
  },

  hierarchy: {
    height: 300,
    overflow: "auto",
  },
  hierarchyGrid: {
    marginBottom: 10,
    display: "flex",
    justifyContent: "space-between",
  },
  centerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  topBarIcons: {
    margin: "0px 10px",
  },
  button: {
    "& .MuiButton-root": {
      color: "#fff",
    },
    "& .MuiButton-outlined": {
      borderColor: "#f2f2f2",
    },
  },
  paper: {
    backgroundColor: "#2B2B2B",
    color: "#B2B2B2",
    '& .MuiAutocomplete-option[data-focus="true"]': {
      background: "#3E3E3E",
    },
  },
  clearIndicator: {
    // backgroundColor: "gray",
    "& span": {
      "& svg": {
        color: "#B2B2B2",
      },
    },
  },
  // notchedOutline: {
  //   borderWidth: "1px",
  //   borderColor: "#B2B2B2 !important",
  // },
}));

const profileData = [
  { title: "Apple Pay - Online", year: 1994 },
  { title: "Best Buy Kiosks 2", year: 1972 },
  { title: "Best Buy Retail Stores", year: 1974 },
  { title: "Best Buy Retail Stores - Clone", year: 2008 },
  { title: "Geek Squad", year: 1957 },
  { title: "Cowboom.com", year: 1993 },
  { title: "Techliquidators.com ecomm", year: 1994 },
];

// const nodes = [
//   {
//     value: "/app",
//     label: "app",
//     children: [
//       {
//         value: "/app/Http",
//         label: "Http",
//         children: [
//           {
//             value: "/app/Http/Controllers",
//             label: "Controllers",
//             children: [
//               {
//                 value: "/app/Http/Controllers/WelcomeController.js",
//                 label: "WelcomeController.js",
//               },
//             ],
//           },
//           {
//             value: "/app/Http/routes.js",
//             label: "routes.js",
//           },
//         ],
//       },
//       {
//         value: "/app/Providers",
//         label: "Providers",
//         children: [
//           {
//             value: "/app/Providers/EventServiceProvider.js",
//             label: "EventServiceProvider.js",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: "/config",
//     label: "config",
//     children: [
//       {
//         value: "/config/app.js",
//         label: "app.js",
//       },
//       {
//         value: "/config/database.js",
//         label: "database.js",
//       },
//     ],
//   },
//   {
//     value: "/public",
//     label: "public",
//     children: [
//       {
//         value: "/public/assets/",
//         label: "assets",
//         children: [
//           {
//             value: "/public/assets/style.css",
//             label: "style.css",
//           },
//         ],
//       },
//       {
//         value: "/public/index.html",
//         label: "index.html",
//       },
//     ],
//   },
//   {
//     value: "/.env",
//     label: ".env",
//   },
//   {
//     value: "/.gitignore",
//     label: ".gitignore",
//   },
//   {
//     value: "/README.md",
//     label: "README.md",
//   },
// ];

const HomeComp = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");
  // const [checked, setChecked] = React.useState([]);
  // const [expanded, setExpanded] = React.useState([]);
  const [addModal, setAddModal] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const ModalOpen = () => {
    setAddModal(true);
  };

  const ModalClose = () => {
    setAddModal(false);
  };
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.topBar}>
        <Grid container justify="space-between">
          <Grid
            item
            style={{ alignItems: "center", height: "100%", display: "flex" }}
          >
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              style={{ color: "#B2B2B2" }}
            >
              <Link color="inherit" href="/" onClick={handleClick}>
                <HomeOutlined style={{ color: "#00aeef" }} />
              </Link>
              <Link
                color="inherit"
                href="/getting-started/installation/"
                onClick={handleClick}
              >
                Profile Settings
              </Link>
              <Typography className={classes.breadcrumbPrimary}>
                Assign Profile
              </Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item style={{ display: "flex", alignItems: "center" }}>
            <Avatar className={classes.topBarIcons}>
              <img src={logo} alt="logo" />
            </Avatar>{" "}
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.topBarIcons}
            >
              Client : Best Buy (12345678)
            </Typography>{" "}
            <div
              className={classes.centerStyle}
              style={{ borderLeft: "2px solid #484848" }}
            >
              <Avatar style={{ margin: "0px 20px" }}>
                <Notifications />
              </Avatar>
              <Avatar>
                <img src={profileicon} alt="profileicon" />
              </Avatar>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3">Assign Profile</Typography>
        <Typography style={{ marginTop: 10 }}>
          Select an exiting profile to assign
        </Typography>
        <FormControl component="fieldset" style={{ marginTop: 20 }}>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Account Settings"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Transactions Controls"
            />
          </RadioGroup>
        </FormControl>
        <Typography variant="subtitle1" style={{ marginTop: 20 }}>
          Profile Name
        </Typography>
        <Autocomplete
          id="combo-box-demo"
          options={profileData}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          classes={{
            paper: classes.paper,
            clearIndicatorDirty: classes.clearIndicator,
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Select Profile"
              variant="outlined"
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.card}>
          <div className={classes.hierarchyGrid}>
            <Typography variant="h6">Hierarchy</Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.hierarchy}>
            {/* <CheckboxTree
              nodes={nodes}
              checked={checked}
              expanded={expanded}
              onCheck={(checked) => setChecked({ checked })}
              onExpand={(expanded) => setExpanded({ expanded })}
            /> */}

            <BasicExample />
          </div>
          <div style={{ padding: 20 }} className={classes.button}>
            <div className={classes.centerStyle}>
              <Button variant="outlined" style={{ marginRight: 10 }}>
                Clear All
              </Button>
              <Button variant="outlined" onClick={() => ModalOpen()}>
                Assign Profile
              </Button>
            </div>
          </div>
        </Card>
      </Grid>
      {addModal && (
        <ModalComp
          open={addModal}
          handleClose={ModalClose}
          header={"Add Product Inventory"}
          isTitle
        />
      )}
    </Grid>
  );
};

export default HomeComp;
