import React from "react";
import { Paper, Typography } from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import logo from '../images/city.jpg';
import JobSearchBar from "./JobSearchBar";

const customTheme = createMuiTheme({
    status: {
      danger: orange[500],
    },
  });

const useStyles = makeStyles(theme => ({
    headerContainer: {
        marginTop: 50,
        background: `url(${logo}) no-repeat `,        
        minHeight: 300,
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        padding: 20
    },
    headerTitle: {
        fontWeight: 'bold',        
    },
    headerSubTitle: {
        marginBottom: 50,        
    }
}));


function JobContentHeader() {
    const classes = useStyles();
    return (
        <Paper className={classes.headerContainer}>
            <Typography variant="h3" className={classes.headerTitle}>
                My Job Search
            </Typography>
            <Typography variant="subtitle1" className={classes.headerSubTitle}>
                14000 jobs posted in 2019
            </Typography>
            <JobSearchBar />
        </Paper>
    )
}

export default JobContentHeader;