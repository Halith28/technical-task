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
import CheckboxTree from "react-checkbox-tree";
import BasicExample from "./sample";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import logo from "../../assets/Group 1909.png";
import { Notifications, HomeOutlined, Search } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import profileicon from "../../assets/profileicon.png";
import ModalComp from "../../components/modalComp";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff !important",
    padding: "40px 100px",
    "& .MuiInputBase-input": {
      color: "#fff",
    },
    "& .MuiFormLabel-root": {
      color: "#fff",
    },
    "& .MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline": {
      borderColor: "#2B2B2B !important",
    },
    "& .MuiOutlinedInput-root.Mui-focuse.MuiOutlinedInput-notchedOutline": {
      borderColor: "#2B2B2B",
    },
    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: "#00aeef !important",
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
}));

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  { title: "Star Wars: Episode VI - Return of the Jedi", year: 1983 },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  { title: "Eternal Sunshine of the Spotless Mind", year: 2004 },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];

const nodes = [
  {
    value: "/app",
    label: "app",
    children: [
      {
        value: "/app/Http",
        label: "Http",
        children: [
          {
            value: "/app/Http/Controllers",
            label: "Controllers",
            children: [
              {
                value: "/app/Http/Controllers/WelcomeController.js",
                label: "WelcomeController.js",
              },
            ],
          },
          {
            value: "/app/Http/routes.js",
            label: "routes.js",
          },
        ],
      },
      {
        value: "/app/Providers",
        label: "Providers",
        children: [
          {
            value: "/app/Providers/EventServiceProvider.js",
            label: "EventServiceProvider.js",
          },
        ],
      },
    ],
  },
  {
    value: "/config",
    label: "config",
    children: [
      {
        value: "/config/app.js",
        label: "app.js",
      },
      {
        value: "/config/database.js",
        label: "database.js",
      },
    ],
  },
  {
    value: "/public",
    label: "public",
    children: [
      {
        value: "/public/assets/",
        label: "assets",
        children: [
          {
            value: "/public/assets/style.css",
            label: "style.css",
          },
        ],
      },
      {
        value: "/public/index.html",
        label: "index.html",
      },
    ],
  },
  {
    value: "/.env",
    label: ".env",
  },
  {
    value: "/.gitignore",
    label: ".gitignore",
  },
  {
    value: "/README.md",
    label: "README.md",
  },
];

const HomeComp = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");
  const [checked, setChecked] = React.useState([]);
  const [expanded, setExpanded] = React.useState([]);
  const [addModal, setAddModal] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const addModalOpen = () => {
    setAddModal(true);
  };

  const addModalClose = () => {
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
              <Avatar style={{ margin: "0px 10px" }}>
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
          options={top100Films}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
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
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div> */}
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
            <CheckboxTree
              nodes={nodes}
              checked={checked}
              expanded={expanded}
              onCheck={(checked) => setChecked({ checked })}
              onExpand={(expanded) => setExpanded({ expanded })}
            />

            <BasicExample />
          </div>
          <div style={{ padding: 20 }} className={classes.button}>
            <div className={classes.centerStyle}>
              <Button variant="outlined" style={{ marginRight: 10 }}>
                Clear All
              </Button>
              <Button variant="outlined" onClick={() => addModalOpen()}>
                Assign Profile
              </Button>
            </div>
          </div>
        </Card>
      </Grid>
      {addModal && (
        <ModalComp
          open={addModal}
          handleClose={addModalClose}
          header={"Add Product Inventory"}
          isTitle
        />
      )}
    </Grid>
  );
};

export default HomeComp;
