import React from 'react';
import Head from 'next/head';
import Lottie from 'react-lottie';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  useMediaQuery,
  Hidden,
  IconButton,
} from '@material-ui/core';

import integrationAnimation from '../src/animations/integrationAnimation/data.json';

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
}));

const ReactNative = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('XS'));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column'>
      <Head>
        <title key='title'>React Native Development | iOS & Android</title>
        <meta
          name='description'
          key='description'
          content='React Native development information about Grant Harris, software engineer, specializing in front end development with React.'
        />
        <meta
          property='og:title'
          content='Grant Harris, Software Engineer | React Native App Development'
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
              href='/reactapps'
              style={{ backgroundColor: 'transparent' }}
              onClick={() => setSelectedIndex(1)}
            >
              <img
                src='/assets/backArrow.svg'
                alt='back to react development page'
              />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography variant='h1' align='center'>
              React Native
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph align='center'>
              The power of React unleashed on mobile app development.
            </Typography>
            <Typography variant='body1' paragraph align='center'>
              When I first learned about React Native, it felt like it was too
              good to be true. All of the power and familiarity of the React
              ecosystem and the ability to create native iOS and Android apps in
              the same codebase?
            </Typography>
            <Typography variant='body1' paragraph align='center'>
              You can't ask for much more than that.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              href='/teamwork'
              style={{ backgroundColor: 'transparent' }}
              onClick={() => setSelectedIndex(3)}
            >
              <img
                src='/assets/forwardArrow.svg'
                alt='forward to teamwork page'
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        style={{ marginTop: '10em', marginBottom: '10em' }}
        className={classes.rowContainer}
      >
        <Grid item container direction='column' md>
          <Grid item>
            <Typography
              variant='h4'
              gutterBottom
              align={matchesSM ? 'center' : undefined}
            >
              React's Ecosystem
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              paragraph
              align={matchesSM ? 'center' : undefined}
              style={{ maxWidth: '40em' }}
            >
              To be able to leverage my knowledge of React to instantly be able
              to create fully native mobile apps is something I didn't think
              possible. React native makes it easy.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: matchesSM ? '15em' : '20em' }}
          />
        </Grid>
        <Grid item container direction='column' md>
          <Grid item>
            <Typography
              variant='h4'
              gutterBottom
              align={matchesSM ? 'center' : 'right'}
            >
              Native Apps for iOS and Android
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              paragraph
              align={matchesSM ? 'center' : 'right'}
              style={{ maxWidth: '40em' }}
            >
              One codebase, no redundancy, one mobile dev-team.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              align={matchesSM ? 'center' : 'right'}
              style={{ maxWidth: '40em' }}
            >
              The ability to have all of your mobile dev resources focused into
              one team allows for so much more to be accomplished. I can't
              imagine how nice it must be for managers!
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesMD ? 'column' : 'row'}
          style={{ marginTop: '10em', marginBottom: '10em' }}
          className={classes.rowContainer}
        >
          <Grid item container direction='column' alignItems='center' md>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                Harness React's Toolbox
              </Typography>
            </Grid>
            <Grid item>
              <img src='/assets/swissKnife.svg' alt='swiss army knife' />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction='column'
            alignItems='center'
            md
            style={{
              marginTop: matchesMD ? '8em' : undefined,
              marginBottom: matchesMD ? '10em' : undefined,
            }}
          >
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                Reduce Complexity
              </Typography>
            </Grid>
            <Grid item>
              <img
                src='/assets/extendAccess.svg'
                alt='tear-one-off sign'
                style={{ maxWidth: matchesXS ? '10em' : '28em' }}
              />
            </Grid>
          </Grid>
          <Grid item container direction='column' alignItems='center' md>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                Streamline Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                src='/assets/increaseEngagement.svg'
                alt='app with notification'
              />
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

export default ReactNative;
