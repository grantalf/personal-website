import React from 'react';
import Link from '../Link';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2.5em',
      width: '2.5em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
}));

const Footer = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify='center' className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href='/'
                onClick={() => setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href='/interests'
                onClick={() => setValue(1)}
              >
                Interests
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href='/react'
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                React
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href='/reactnative'
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
                React Native
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href='/teamwork'
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                Teamwork
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href='/buildbetter'
                onClick={() => setValue(2)}
              >
                Build Better
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href='/buildbetter'
                onClick={() => setValue(2)}
              >
                Collaboration
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href='/buildbetter'
                onClick={() => setValue(2)}
              >
                Interpersonal Skills
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href='/buildbetter'
                onClick={() => setValue(2)}
              >
                Pair Programming
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href='/about'
                onClick={() => setValue(3)}
              >
                About Grant
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href='/about'
                onClick={() => setValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href='/about'
                onClick={() => setValue(3)}
              >
                Design
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href='/contact'
                onClick={() => setValue(4)}
              >
                Contact Grant
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      {/* placeholder adornment */}
      <img
        className={classes.adornment}
        src='/assets/footerAdornment.svg'
        alt='black decorative slash'
      />
      <Grid
        container
        spacing={2}
        justify='flex-end'
        className={classes.socialContainer}
      >
        <Grid
          item
          component={'a'}
          href='https://www.facebook.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
            src='/assets/facebook.svg'
            alt='facebook logo'
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={'a'}
          href='https://www.twitter.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
            src='/assets/twitter.svg'
            alt='twitter logo'
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={'a'}
          href='https://www.instagram.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
            src='/assets/instagram.svg'
            alt='instagram logo'
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
