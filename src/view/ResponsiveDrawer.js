import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import ReportIcon from '@material-ui/icons/Report';
import WorkIcon from '@material-ui/icons/Work';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import App from '../App';
import logo from '../images/workfinder.png';
import {Typography} from '@material-ui/core';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    paddingRight: 40,
    paddingLeft: 40
  },
  menuItem: {
    fontSize:8
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  centeralized: {    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const renderList = idx => {
    switch (idx) {
      case 0: return <HomeIcon />
      case 1: return <SearchIcon />
      case 5: return <WorkIcon />
      case 6: return <AddIcon />
      case 7: return <ReportIcon />
      default: return;
    }
  }

  const drawer = (
    <div>
      <div className={classes.centeralized}>
        <img src={logo}/>
      </div>      
      <Divider />
      <List>
        {['Home', 'Search Jobs', 'Favourite Companies', 'By Your Specialty', 'High Salaries', 'Top Companies', 'Post Job', 'Report Us'].map((text, index) => (
          <ListItem button key={text} >
            <ListItemIcon>{renderList(index)}</ListItemIcon>
            <ListItemText 
            disableTypography
        primary={<Typography style={{fontSize:12}}>{text}</Typography>} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <App />
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;