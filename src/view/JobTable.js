import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, Avatar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    card: {
        padding: theme.spacing(3),
        marginBottom: 20
    },
    centeralized: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
    },
    jobItemTitle: {
        textAlign: 'left',
        fontWeight: 'bold',
    },
    jobItemLocation: {
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    jobItemSalary: {
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    jobItemSubtitle: {
        fontSize: 12,
        color: theme.palette.text.secondary
    },
}));

const extraData = [
    {  
        title: "Senior Product Designer",
        company_name: "Google Inc.",
        src : "https://avatars0.githubusercontent.com/u/1342004?s=400&v=4",
        location : "Mt. view, California",
        salary: "$200k - $280k"
    },
    {
        title : "Senior UI/Ux Designer",
        company_name: "Facebook",
        src : "https://clipground.com/images/official-facebook-logo-png-9.png",
        location : "Menlo Park, California",
        salary : "$150k - 170k"
    },
    {
        title : "Product Designer",
        company_name : "Apple Inc.",
        src : "data:image/png;base64,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",
        location : "Cupertino, California",
        salary :"$250k - 320k "
    },{
        title : "Head of Design",
        company_name : "Spotify",
        src : "https://developer.spotify.com/assets/branding-guidelines/icon1@2x.png",
        location : "Manhatten, New York",
        salary : "$340k - 400k"
    },
    {
        title: "Graphic Designer" ,
        company_name : "Tinder",
        src : "https://styles.redditmedia.com/t5_2w7mz/styles/communityIcon_jmyuhs81jl211.png",
        location : "Dallas,Texas",
        salary : "$120k - 170k",
    },
    {
        title : "Seinor UI Designer",
        company_name : "Dropbox",
        src : "https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/dropbox.png",
        location : "Dallas,Texas",
        salary : "$150k - 200k"
    }
];

const JobCardBody = props => {
    const classes = useStyles();
    const rows = extraData.map((item,idx) => {
        return (
            <Card className={classes.card}>
                <Grid container spacing={4}>
                    <Grid item xs={1} className={[classes.centeralized]}>
                        <Avatar aria-label="recipe" className={classes.avatar} variant="rounded" src={item.src}></Avatar>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="subtitle1" gutterbottom className={classes.jobItemTitle}>
                            {item.title}
                        </Typography>
                        <Typography className={classes.jobItemSubtitle} component="subtitle2" display="block">
                            {item.company_name}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" gutterbottom className={classes.jobItemTitle}>
                            {item.location}
                            </Typography>
                        <Typography className={classes.jobItemSubtitle} component="subtitle2" display="block">
                            Location
                            </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle1" gutterbottom className={classes.jobItemTitle}>
                            {item.salary}
                            </Typography>
                        <Typography className={classes.jobItemSubtitle} component="subtitle2" display="block">
                            Yearly
                            </Typography>
                    </Grid>
                    {/* <Grid item xs={2}>
                      <Button variant="contained" color="primary" onClick={() => props.removeJobListener(item.id)}>Delete</Button>
                    </Grid> */}
                </Grid>
            </Card>
        );
    });
    return <div>{rows}</div>;
}

class JobTable extends Component {
    render() {
        const { jobs, removeJobListener } = this.props
        return (
            <div>
                <JobCardBody jobs={jobs} removeJobListener={removeJobListener} />
            </div>
        )
    }
}

export default JobTable