import React from 'react';
import Head from 'next/head';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Avatar,
  useMediaQuery,
  Hidden,
} from '@material-ui/core';

import CallToAction from '../src/ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  avatar: {
    height: '25em',
    width: '25em',
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      width: '20em',
      maxHeight: 300,
      maxWidth: 300,
      marginBottom: '-2em',
    },
  },
}));

const About = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction='column'>
      <Head>
        <title key='title'>
          About Me - History & Skills | Software Engineering
        </title>
        <meta
          name='description'
          key='description'
          content='Learn more about Grant Harris, software engineer, specializing in front end development with React.'
        />
        <meta
          property='og:title'
          content='Grant Harris, Software Engineer | About Me'
          key='og:title'
        />
        <meta property='og:url' key='og:url' content='' />
        <link rel='canonical' key='canonical' href='' />
      </Head>
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography align='center' variant='h1'>
          About Me
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        justify='center'
        style={{ marginTop: '3em' }}
      >
        <Typography
          variant='h4'
          align='center'
          className={classes.missionStatement}
        >
          What fundamentally draws me to the field of software engineering is
          the desire to help others navigate their lives in a more meaningful
          and effective manner. I have directly benefitted so much from
          well-written software, and have also suffered from poorly-engineered
          software! I hope to work with others to build software that has the
          ability to profoundly improve a person’s daily routine.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justify='space-around'
        style={{ marginTop: '10em', marginBottom: '10em' }}
      >
        <Grid item>
          <Grid
            item
            container
            direction='column'
            lg
            style={{ maxWidth: '35em' }}
          >
            <Grid item>
              <Typography
                variant='h4'
                align={matchesMD ? 'center' : undefined}
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                Long-time listener, first-time caller!
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                I have known that I wanted to be a software engineer for over a
                decade.
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                Over the years, I have met many software engineers. Each
                conversation about their careers would reinforce the notion that
                they feel fulfilled by their work and have the opportunity to
                truly make an impact in their organization and on their clients'
                lives. It sounded too good to be true!
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                So, I set out a gameplan for myself. Once my kids were old
                enough to be in daycare, I would set out to become a software
                engineer. Now, I too have felt the joy and satisfaction of
                writing quality code that can be enjoyed by the world.
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                I am beyond excited to join a team of software engineers that
                finds the same rush in making impactful software solutions for
                the world to enjoy!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify='center' alignItems='center' lg>
            <img
              src='/assets/history.svg'
              alt='quill pen sitting on top of book'
              style={{ maxHeight: matchesMD ? 200 : '22em' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction='column'
        alignItems='center'
        className={classes.rowContainer}
        style={{ marginBottom: matchesSM ? '10em' : '15em' }}
      >
        <Grid item>
          <Typography variant='h4' align='center' gutterBottom>
            Hello!
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5' paragraph align='center'>
            Grant Harris
          </Typography>
          <Typography variant='body1' paragraph align='center'>
            Father, Coder, Gamer, Surfer, Decent Cook
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            alt='Grant Harris'
            src='/assets/grant.jpg'
            className={classes.avatar}
          />
        </Grid>
        <Hidden lgUp>
          <Grid
            item
            lg
            style={{ maxWidth: '45em', padding: '1.5em', marginTop: '3em' }}
          >
            <Typography variant='body1' align='center' paragraph>
              My first job in middle-school was at an internet cafe, teaching
              kids computer literacy and how to play Starcraft: Brood War. I
              wrote my first HTML tags there!
            </Typography>
            <Typography variant='body1' align='center' paragraph>
              All these years later, I'm ready to join your team to help achieve
              your goals.
            </Typography>
          </Grid>
        </Hidden>
        <Grid
          item
          container
          justify={matchesMD ? 'center' : undefined}
          style={{ marginTop: '3em' }}
        >
          <Grid
            item
            container
            direction='column'
            lg
            alignItems={matchesMD ? 'center' : undefined}
            style={{ marginBottom: matchesMD ? '2.5em' : 0 }}
          >
            <Grid item>
              <img
                src='/assets/sandsurf.jpg'
                alt='Grant sandsurfing'
                style={{ maxWidth: matchesMD ? 450 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant='caption'>
                sandsurfing in Colorado!
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: '45em', padding: '1.5em' }}>
              <Typography variant='body1' align='center' paragraph>
                My first job in middle-school was at an internet cafe, teaching
                kids computer literacy and how to play Starcraft: Brood War. I
                wrote my first HTML tags there!
              </Typography>
              <Typography variant='body1' align='center' paragraph>
                All these years later, I'm ready to join your team to help
                achieve your goals.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction='column'
            lg
            alignItems={matchesMD ? 'center' : 'flex-end'}
          >
            <Grid item>
              <img
                src='/assets/grantfam.jpg'
                alt='Grant and Family'
                style={{ maxWidth: matchesMD ? 450 : 600 }}
              />
            </Grid>
            <Grid item>
              <Typography variant='caption'>My family!</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
};

export default About;
