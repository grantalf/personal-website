import React from 'react';
import Lottie from 'react-lottie';
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

import documentsAnimation from '../src/animations/documentsAnimation/data';
import scaleAnimation from '../src/animations/scaleAnimation/data.json';
import automationAnimation from '../src/animations/automationAnimation/data.json';
import uxAnimation from '../src/animations/uxAnimation/data';

import CallToAction from '../src/ui/CallToAction';
import { Call } from '@material-ui/icons';

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
}));

const ReactApps = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const documentsOptions = {
    loop: true,
    autoplay: false,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: false,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: false,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: false,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column'>
      <Head>
        <title key='title'>React Development | Responsive Design</title>
        <meta
          name='description'
          key='description'
          content='React app development information about Grant Harris, software engineer, specializing in front end development with React.'
        />
        <meta
          property='og:title'
          content='Grant Harris, Software Engineer | React Development'
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
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              component={Link}
              href='/teamwork'
              style={{ backgroundColor: 'transparent' }}
              onClick={() => setSelectedIndex(3)}
            >
              <img
                src='/assets/backArrow.svg'
                alt='Back to react native development page'
              />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography variant='h1' align='center'>
              React
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph align='center'>
              More than anything, React is fun to work with.
            </Typography>
            <Typography variant='body1' paragraph align='center'>
              Out of all technologies in the full stack that I have learned,
              React has been the most fun to work with. I constantly feel driven
              to learn more and find better ways of implementing things. The
              most fun conversations I have had in software engineering has been
              about React and front end development, in general.
            </Typography>

            <Typography variant='body1' paragraph align='center'>
              Further, combining React with Material UI has been a match made in
              heaven.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              href='/reactnative'
              style={{ backgroundColor: 'transparent' }}
              onClick={() => setSelectedIndex(2)}
            >
              <img
                src='/assets/forwardArrow.svg'
                alt='Forward to react native page'
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction='row'
        style={{
          marginTop: matchesSM ? '5em' : '10em',
          marginBottom: matchesSM ? '2em' : '13em',
        }}
        justify='center'
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          style={{ maxWidth: '40em' }}
          alignItems='center'
          direction='column'
          sm
        >
          <Grid item>
            <Typography variant='h4'>Reusable Components</Typography>
          </Grid>
          <Grid item>
            <img src='/assets/bulb.svg' alt='lightbulb' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          style={{
            maxWidth: '40em',
            marginTop: matchesSM ? '4em' : 0,
            marginBottom: matchesSM ? '4em' : 0,
          }}
          alignItems='center'
          direction='column'
          sm
        >
          <Grid item>
            <Typography variant='h4'>Virtual DOM</Typography>
          </Grid>
          <Grid item>
            <img src='/assets/stopwatch.svg' alt='stopwatch' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          style={{ maxWidth: '40em' }}
          alignItems='center'
          direction='column'
          sm
        >
          <Grid item>
            <Typography variant='h4'>Time and Effort Saved!</Typography>
          </Grid>
          <Grid item>
            <img src='/assets/cash.svg' alt='cash' />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify='space-between'
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          style={{ marginBottom: matchesMD ? '15em' : 0 }}
          md
        >
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : undefined}>
                React Hooks
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                I made a point to learn React without hooks first in order to be
                fluent in pre-hooks and post-hooks codebases. This also gave me
                the foundation to appreciate how great hooks are.
              </Typography>
              <Typography
                variant='body1'
                paragraphalign={matchesSM ? 'center' : undefined}
              >
                The more complex I begin to make my apps, the more thankful I am
                for the built-in hooks, as well as the ability to create custom
                hooks.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 275 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          md
        >
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : 'right'}>
                Material UI
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                Material UI was built specifically for React, and it shows. The
                custom hooks available fit right in with my React
                knowledge-base.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                It's obvious that the Material UI team has put a lot of love
                into the technology, and they have killer docs, too!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction='row'
        style={{ marginTop: '10em', marginBottom: '10em' }}
        className={classes.rowContainer}
      >
        <Grid item container direction='column' alignItems='center'>
          <Grid item>
            <img
              src='/assets/root.svg'
              alt='tree with roots extending out'
              height={matchesSM ? '300em' : '450em'}
              width={matchesSM ? '300em' : '450em'}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant='h4' align='center' gutterBottom>
              Collaborative
            </Typography>
            <Typography variant='body1' align='center' paragraph>
              The modularity of components makes sharing projects easy. It can
              also declutter files by referring to the component, instead of
              writing all of its code again in-line.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justify='space-between'
        style={{ marginBottom: '10em' }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD ? '15em' : 0 }}
          direction={matchesSM ? 'column' : 'row'}
          md
        >
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : undefined}>
                Based in Javascript
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                Javascript is my preferred language, so React's blending of JS
                and HTML/CSS is a perfect fit.
              </Typography>

              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                I derive dinstinct satisfaction from injecting a nice ternary
                statement into my JSX!
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          md
        >
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography
                variant='h4'
                align={matchesSM ? 'center' : 'right'}
                style={{ marginTop: '1em' }}
              >
                Polished UX
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                Professional quality apps with minimal effort.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                React, with the amazing libraries that make up it's dependency
                ecosystem, create amazing products easily.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default ReactApps;
