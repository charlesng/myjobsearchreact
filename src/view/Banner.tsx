import React from "react";
import {
  Paper,
  Typography,
  InputBase,
  IconButton,
  Button,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../images/city.jpg";
const useStyles = makeStyles(() => ({
  bannerContainer: {
    background: `url(${logo}) no-repeat `,
    backgroundColor: "#FFFFFF",
    minHeight: 300,
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
    padding: 20
  },
  bannerTitle: {
    fontWeight: "bold"
  },
  bannerSubTitle: {
    marginBottom: 50
  },
  centeralized: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const JobSearchBar = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item md={10} sm={12} xs={12}>
        <Paper component="form" className={classes.centeralized}>
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            fullWidth={true}
            placeholder="Search you dream job"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
      </Grid>
      <Grid item md={2} sm={5} xs={12} className={classes.centeralized}>
        <Button variant="contained" color="primary" value="Submit">
          Advance Filter
        </Button>
      </Grid>
    </Grid>
  );
};

function Banner() {
  const classes = useStyles();
  return (
    <Paper className={classes.bannerContainer}>
      <Typography variant="h4" className={classes.bannerTitle}>
        My Job Search
      </Typography>
      <Typography variant="subtitle1" className={classes.bannerSubTitle}>
        14000 jobs posted in 2019
      </Typography>
      <JobSearchBar />
    </Paper>
  );
}

export default Banner;
