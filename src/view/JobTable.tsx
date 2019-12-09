import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, Avatar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(3),
    marginBottom: 20
  },
  centeralized: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    width: 50,
    height: 50
  },
  jobItemTitle: {
    textAlign: "left",
    fontWeight: "bold"
  },
  jobItemLocation: {
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  jobItemSalary: {
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  jobItemSubtitle: {
    fontSize: 12,
    color: theme.palette.text.secondary
  }
}));

const extraData = [
  {
    title: "Senior Product Designer",
    company_name: "Google Inc.",
    src: "https://avatars0.githubusercontent.com/u/1342004?s=400&v=4",
    location: "Mt. view, California",
    salary: "$200k - $280k"
  },
  {
    title: "Senior UI/Ux Designer",
    company_name: "Facebook",
    src: "https://clipground.com/images/official-facebook-logo-png-9.png",
    location: "Menlo Park, California",
    salary: "$150k - 170k"
  },
  {
    title: "Product Designer",
    company_name: "Apple Inc.",
    src: "http://simpleicon.com/wp-content/uploads/apple-256x256.png",
    location: "Cupertino, California",
    salary: "$250k - 320k "
  },
  {
    title: "Head of Design",
    company_name: "Spotify",
    src:
      "https://developer.spotify.com/assets/branding-guidelines/icon1@2x.png",
    location: "Manhatten, New York",
    salary: "$340k - 400k"
  },
  {
    title: "Graphic Designer",
    company_name: "Tinder",
    src:
      "https://styles.redditmedia.com/t5_2w7mz/styles/communityIcon_jmyuhs81jl211.png",
    location: "Dallas,Texas",
    salary: "$120k - 170k"
  },
  {
    title: "Seinor UI Designer",
    company_name: "Dropbox",
    src:
      "https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/dropbox.png",
    location: "Dallas,Texas",
    salary: "$150k - 200k"
  }
];
type JobCardBodyProps = { jobs: any[] };
const JobCardBody = ({ jobs }: JobCardBodyProps) => {
  const classes = useStyles();
  const rows = extraData.map((item, idx) => {
    return (
      <Card className={classes.card}>
        <Grid container spacing={4}>
          <Grid item md={1} sm={3} xs={3} className={classes.centeralized}>
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              variant="rounded"
              src={item.src}
            ></Avatar>
          </Grid>
          <Grid item md={5} sm={9} xs={9}>
            <Typography variant="subtitle1" className={classes.jobItemTitle}>
              {item.title}
            </Typography>
            <Typography
              className={classes.jobItemSubtitle}
              variant="subtitle2"
              display="block"
            >
              {item.company_name}
            </Typography>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Typography variant="subtitle1" className={classes.jobItemTitle}>
              {item.location}
            </Typography>
            <Typography
              className={classes.jobItemSubtitle}
              variant="subtitle2"
              display="block"
            >
              Location
            </Typography>
          </Grid>
          <Grid item md={2} sm={6} xs={12}>
            <Typography variant="subtitle1" className={classes.jobItemTitle}>
              {item.salary}
            </Typography>
            <Typography
              className={classes.jobItemSubtitle}
              variant="subtitle2"
              display="block"
            >
              Yearly
            </Typography>
          </Grid>
        </Grid>
      </Card>
    );
  });
  return <div>{rows}</div>;
};

type JobTablePropos = { jobs: any[] };
const JobTable = ({ jobs }: JobTablePropos) => {
  return <JobCardBody jobs={jobs} />;
};

export default JobTable;
