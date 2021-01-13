import React from 'react';
import Head from 'next/head';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  Hidden,
} from '@material-ui/core';

import CallToAction from '../src/ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.55em',
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  itemContainer: {
    maxWidth: '40em',
  },
  paragraphContainer: {
    maxWidth: '30em',
  },
}));

const Teamwork = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction='column'>
      <Head>
        <title key='title'>Teamwork | Fun, Friendly, Eager to Learn</title>
        <meta
          name='description'
          key='description'
          content='Learn about why teamwork and being a member of a greater community is so important to Grant Harris, software engineer, specializing in front end development with React.'
        />
        <meta
          property='og:title'
          content='Grant Harris, Software Engineer | Teamwork'
          key='og:title'
        />
        <meta property='og:url' key='og:url' content='' />
        <link rel='canonical' key='canonical' href='' />
      </Head>
      <Grid
        item
        container
        direction='row'
        justify='center'
        className={classes.rowContainer}
        style={{
          marginTop: matchesXS ? '1em' : '2em',
        }}
      >
        <Hidden smDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              component={Link}
              href='/reactnative'
              style={{ backgroundColor: 'transparent' }}
              onClick={() => setSelectedIndex(2)}
            >
              <img
                src='/assets/backArrow.svg'
                alt='back to react native development page'
              />
            </IconButton>
          </Grid>
        </Hidden>
        {/* -----Teamwork Block----- */}
        <Grid
          item
          container
          direction='column'
          alignItems='center'
          className={classes.heading}
          style={{ maxWidth: matchesSM ? '30em' : undefined }}
        >
          <Grid item>
            <Typography variant='h1' align='center'>
              Teamwork
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph align='center'>
              As a software engineer, my aim is to contribute to a team that is
              making the world a better place.
            </Typography>
            <Typography variant='body1' paragraph align='center'>
              I wish to join a group of motivated, kind, and positive people who
              are working to create products that improve the world in their own
              special way.
            </Typography>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              href='/reactapps'
              style={{ backgroundColor: 'transparent' }}
              onClick={() => setSelectedIndex(1)}
            >
              <img
                src='/assets/forwardArrow.svg'
                alt='Forward to react development page'
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'
        className={classes.rowContainer}
        style={{ marginTop: '10em' }}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography
                variant='h4'
                gutterBottom
                align={matchesSM ? 'center' : undefined}
              >
                Effective Communication
              </Typography>
            </Grid>
            <Grid item>
              <img
                src='/assets/analytics.svg'
                alt='bar graph with magnifying glass'
                style={{ marginLeft: matchesSM ? undefined : '-2.75em' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.paragraphContainer}
          style={{ marginTop: '1em' }}
        >
          <Typography
            variant='body1'
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            Throughout my years in various professional settings, I have been
            praised for communicating with my team in a respectful, concise, and
            constructive manner.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'
        justify='flex-end'
        className={classes.rowContainer}
        style={{ marginTop: '10em', marginBottom: '10em' }}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' gutterBottom align='center'>
                Positivity
              </Typography>
            </Grid>
            <Grid item>
              <img
                src='/assets/ecommerce.svg'
                alt="graph with magnifying glass revealing 1's and 0's"
                style={{ marginLeft: '1em' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em', marginTop: '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant='body1'
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            If there's one thing that I trend towards, it's a positive and
            optimistic outlook in regards to challenges.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            My natural tendency is to not give up in the face of obstacles, but
            to persevere and look for ways to move forward.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography
                variant='h4'
                gutterBottom
                align={matchesSM ? 'center' : undefined}
              >
                Empathy
              </Typography>
            </Grid>
            <Grid item>
              <img
                src='/assets/outreach.svg'
                alt='megaphone'
                style={{ marginLeft: matchesSM ? undefined : '-2.75em' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant='body1'
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            When stressful situations arise on a team or in a workplace, empathy
            is key to resolving disputes and maintaining the respectful
            environment that is so important to an effective team.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            I am often told that I operate in a way that is often referred to as
            empathetic, and I continue to look for ways to express more empathy
            towards others throughout my life.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'
        justify='flex-end'
        className={classes.rowContainer}
        style={{ marginTop: '10em', marginBottom: '15em' }}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' gutterBottom align='center'>
                Objective-Driven
              </Typography>
            </Grid>
            <Grid item>
              <img
                src='/assets/seo.svg'
                alt="website standing on winner's podium"
                style={{ marginLeft: '1em' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em', marginTop: '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant='body1'
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            Having a goal to work towards is what drives me to succeed at a
            task.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            The motivation from working with others toward an common objective
            is a fuel that sustains me on all levels. It's what makes work fun!
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default Teamwork;
