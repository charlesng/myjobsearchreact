import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, Avatar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Job } from '../model/Job';

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(3),
    marginBottom: 20
  },
  centeralized: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 50,
    height: 50
  },
  jobItemTitle: {
    textAlign: 'left',
    fontWeight: 'bold'
  },
  jobItemLocation: {
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  jobItemSalary: {
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  jobItemSubtitle: {
    fontSize: 12,
    color: theme.palette.text.secondary
  }
}));

type JobCardBodyProps = { jobs: Job[] };
const JobCardBody = ({ jobs }: JobCardBodyProps) => {
  const classes = useStyles();
  const rows = jobs.map((item, idx) => {
    return (
      <Card className={classes.card}>
        <Grid container spacing={4}>
          <Grid item md={1} sm={3} xs={3} className={classes.centeralized}>
            <Avatar
              aria-label='recipe'
              className={classes.avatar}
              variant='rounded'
              src={item.img_src}
            ></Avatar>
          </Grid>
          <Grid item md={5} sm={9} xs={9}>
            <Typography variant='subtitle1' className={classes.jobItemTitle}>
              {item.title}
            </Typography>
            <Typography
              className={classes.jobItemSubtitle}
              variant='subtitle2'
              display='block'
            >
              {item.company_name}
            </Typography>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Typography variant='subtitle1' className={classes.jobItemTitle}>
              {item.location}
            </Typography>
            <Typography
              className={classes.jobItemSubtitle}
              variant='subtitle2'
              display='block'
            >
              Location
            </Typography>
          </Grid>
          <Grid item md={2} sm={6} xs={12}>
            <Typography variant='subtitle1' className={classes.jobItemTitle}>
              {item.salary}
            </Typography>
            <Typography
              className={classes.jobItemSubtitle}
              variant='subtitle2'
              display='block'
            >
              {item.salary_period}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    );
  });
  return <div>{rows}</div>;
};

type JobTablePropos = { jobs: Job[] };
const JobTable = ({ jobs }: JobTablePropos) => {
  return <JobCardBody jobs={jobs} />;
};

export default JobTable;
