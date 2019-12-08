import React from "react";
import { Paper, InputBase, IconButton, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles(theme => ({
    centeralized:{
        display: 'flex',        
        alignItems: 'center',
        justifyContent: 'center',  
    },
    filter: {
        textAlign: 'center',
        padding: theme.spacing(2),
    }
}));

const JobSearchBar = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={4}>
            <Grid item md={10}>
                <Paper component="form" className={[classes.centeralized]} >
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        fullWidth='true'
                        className={classes.input}
                        placeholder="Search you dream job"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                </Paper>
            </Grid>
            <Grid item md={2} className={[classes.centeralized]}>
                <Button  variant="contained" color="primary" value="Submit" >Advance Filter</Button>
            </Grid>
        </Grid>
    );
}

export default JobSearchBar