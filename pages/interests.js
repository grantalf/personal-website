import React from 'react';
import Head from 'next/head';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Button, useMediaQuery } from '@material-ui/core';

import ButtonArrow from '../src/ui/ButtonArrow';

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
    fontSize: '1.25em',
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    marginTop: '0.5em',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
}));

const Interests = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <>
      <Grid container direction='column'>
        <Head>
          <title key='title'>
            Professional Interests | React, React Native, Teamwork
          </title>
          <meta
            name='description'
            key='description'
            content='Go in-depth on professional interests with Grant Harris, software engineer, specializing in front end development with React.'
          />
          <meta
            property='og:title'
            content='Grant Harris, Software Engineer | Professional Interests'
            key='og:title'
          />
          <meta property='og:url' key='og:url' content='' />
          <link rel='canonical' key='canonical' href='' />
        </Head>
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '5em',
            marginTop: matchesSM ? '1em' : '2em',
          }}
        >
          <Typography
            align={matchesSM ? 'center' : undefined}
            variant='h1'
            gutterBottom
          >
            Professional Interests
          </Typography>
        </Grid>
        <Grid item>
          {' '}
          {/*-----React Block-----*/}
          <Grid
            container
            direction='row'
            justify={matchesSM ? 'center' : 'flex-end'}
            className={classes.serviceContainer}
            style={{ marginTop: matchesSM ? '2em' : '5em' }}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? 'center' : undefined,
                width: matchesSM ? undefined : '35em',
              }}
            >
              <Typography variant='h4'>React</Typography>
              <Typography variant='subtitle1' className={classes.subtitle}>
                React has been so fun to work with. Every new aspect I learn
                makes website development even more fun!
              </Typography>
              <Typography variant='subtitle1'>
                I've especially enjoyed working with Material UI to easily
                create responsive and performant React websites.
              </Typography>
              <Button
                component={Link}
                href='/reactapps'
                variant='outlined'
                className={classes.learnButton}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
              <img
                className={classes.icon}
                src='/assets/mobileIcon.svg'
                alt='mobile apps icon'
                width='250em'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {' '}
          {/*-----React Native Block-----*/}
          <Grid
            container
            direction='row'
            justify={matchesSM ? 'center' : undefined}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : '5em',
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant='h4'>React Native</Typography>
              <Typography variant='subtitle1' className={classes.subtitle}>
                React Native has made the dive into mobile app development
                seamless.
              </Typography>
              <Typography variant='subtitle1'>
                All of the benefits of React, and the result is fully{' '}
                <span className={classes.specialText}>native!</span>.
              </Typography>
              <Button
                component={Link}
                href='/reactnative'
                variant='outlined'
                className={classes.learnButton}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                src='/assets/customSoftware.svg'
                alt='custom software icon'
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          {' '}
          {/*-----Teamwork-----*/}
          <Grid
            container
            direction='row'
            justify={matchesSM ? 'center' : 'flex-end'}
            className={classes.serviceContainer}
            style={{ marginBottom: matchesSM ? '2em' : '5em' }}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? 'center' : undefined,
                width: matchesSM ? undefined : '35em',
              }}
            >
              <Typography variant='h4'>Teamwork</Typography>
              <Typography variant='subtitle1' className={classes.subtitle}>
                Collaborative efforts yield the best results.
              </Typography>
              <Typography variant='subtitle1'>
                Effective communication and organization is key to{' '}
                {matchesSM ? null : <br />} creating an effective team dynamic.
              </Typography>
              <Button
                component={Link}
                href='/teamwork'
                variant='outlined'
                className={classes.learnButton}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
              <img
                className={classes.icon}
                src='/assets/websiteIcon.svg'
                alt='website icon'
                width='250em'
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Interests;
