import React from 'react';
import Head from 'next/head';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
} from '@material-ui/core';
import Link from '../src/Link';
import ButtonArrow from '../src/ui/ButtonArrow';
import CallToAction from '../src/ui/CallToAction';

import animationData from '../src/animations/landinganimation/data';

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  hireButton: {
    ...theme.typography.hire,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 50,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
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
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url('/assets/repeatingBackground.svg')`,
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%',
    },
  },
  infoBackground: {
    backgroundImage: `url('/assets/infoBackground.svg')`,
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

const Index = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Grid container direction='column' className={classes.mainContainer}>
        <Head>
          <title key='title'>
            React | React Native | Teamwork | Software Engineering
          </title>
          <meta
            name='description'
            key='description'
            content='The personal website for Grant Harris, software engineer, specializing in front end development with React.  Learn about his professional interests, what he values in a team, and more!'
          />
          <meta
            property='og:title'
            content='Grant Harris, Software Engineer | React, React Native, Teamwork'
            key='og:title'
          />
          <meta property='og:url' key='og:url' content='' />
          <link rel='canonical' key='canonical' href='' />
        </Head>
        <Grid item>
          {' '}
          {/*-----Hero Block-----*/}
          <Grid
            container
            direction='row'
            alignItems='center'
            justify='flex-end'
          >
            <Grid item sm className={classes.heroTextContainer}>
              <Typography variant='h1' align='center'>
                Fullstack Engineer Currently Residing in the
                <br /> Frontend/React Ecosystem
              </Typography>
              <Grid
                container
                justify='center'
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    component={Link}
                    href='/hire'
                    className={classes.hireButton}
                    variant='contained'
                    onClick={() => setValue(1000)}
                  >
                    Hire Me!
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    component={Link}
                    href='/buildbetter'
                    className={classes.learnButtonHero}
                    variant='outlined'
                  >
                    <span style={{ marginLeft: 10, marginRight: 10 }}>
                      Learn More
                    </span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm className={classes.animation}>
              <Lottie
                options={defaultOptions}
                height={'100%'}
                width={'100%'}
                style={{ marginRight: matchesXS ? '10em' : undefined }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {' '}
          {/*-----React Block-----*/}
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
              <Typography variant='h4'>React</Typography>
              <Typography
                variant='body1'
                paragraph
                className={classes.subtitle}
              >
                Building beautiful and performant websites with the power of
                React.
                <br />
                Attention to detail and an eye for efficiency with the aim to
                produce
                <br />
                <span className={classes.specialText}>beautiful websites.</span>
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
                <span style={{ marginLeft: 10, marginRight: 10 }}>
                  Learn More
                </span>
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
          {/*-----iOS/Android Block-----*/}
          <Grid
            container
            direction='row'
            justify={matchesSM ? 'center' : 'flex-end'}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant='h4'>React Native</Typography>
              <Typography variant='subtitle1' className={classes.subtitle}>
                Leveraging React for streamlined native mobile development.
                <br />
                Seemlessly integrating the benefits of React into the
                <br /> mobile app space, be it iOS or Android.
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
                <span style={{ marginLeft: 10, marginRight: 10 }}>
                  Learn More
                </span>
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
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {' '}
          {/*-----Teamwork Block-----*/}
          <Grid
            container
            direction='row'
            justify={matchesSM ? 'center' : 'flex-start'}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : '5em',
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant='h4'>Teamwork</Typography>
              <Typography variant='subtitle1' className={classes.subtitle}>
                Eager to be a positive-minded, meaningful member of your team.
                <br />
                Highly interested in a collaborative work environment.
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
                <span style={{ marginLeft: 10, marginRight: 10 }}>
                  Learn More
                </span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                src='/assets/websiteIcon.svg'
                alt='website icon'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*-----Build Better Card-----*/}
          <Grid
            container
            alignItems='center'
            justify='center'
            style={{ height: '75em', marginTop: '12em' }}
          >
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction='column'
                  style={{ textAlign: 'center' }}
                >
                  <Grid item>
                    <Typography variant='h3' gutterBottom>
                      Beautiful Products. Improving Lives.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='subtitle1'>
                      I have a strong desire to produce products that are
                      elegant to use, intuitive to utilize, and transformative
                      to the overall user-experience.
                    </Typography>
                    <Button
                      component={Link}
                      href='/buildbetter'
                      variant='outlined'
                      className={classes.learnButton}
                      onClick={() => setValue(2)}
                    >
                      <span style={{ marginLeft: 10, marginRight: 10 }}>
                        Learn More
                      </span>
                      <ButtonArrow
                        width={15}
                        height={15}
                        fill={theme.palette.common.blue}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className={classes.revolutionBackground} />
          </Grid>
        </Grid>
        <Grid item>
          {/*-----Information Block-----*/}
          <Grid
            container
            direction='row'
            style={{ height: '40em' }}
            alignItems='center'
            className={classes.infoBackground}
          >
            <Grid
              item
              container
              style={{
                textAlign: matchesXS ? 'center' : 'inherit',
              }}
              direction={matchesXS ? 'column' : 'row'}
            >
              <Grid
                sm
                item
                style={{
                  marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                }}
              >
                <Grid
                  container
                  direction='column'
                  style={{ marginBottom: matchesXS ? '10em' : 0 }}
                >
                  <Typography variant='h1' style={{ color: 'white' }}>
                    About Me
                  </Typography>
                  <Typography variant='subtitle2'>
                    Please reach out to learn <br />
                    more about me!
                  </Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      href='/about'
                      variant='outlined'
                      className={classes.learnButton}
                      style={{
                        color: 'white',
                        borderColor: 'white',
                        marginTop: '0.5rem',
                      }}
                      onClick={() => setValue(3)}
                    >
                      <span style={{ marginLeft: 10, marginRight: 10 }}>
                        Learn More
                      </span>
                      <ButtonArrow width={10} height={10} fill='white' />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                sm
                item
                style={{
                  marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                  textAlign: matchesXS ? 'center' : 'right',
                }}
              >
                <Grid container direction='column'>
                  <Typography variant='h1' style={{ color: 'white' }}>
                    Contact Me
                  </Typography>
                  <Typography variant='subtitle2'>
                    Tell me more about yourself and <br /> your organization!
                  </Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      href='/contact'
                      variant='outlined'
                      className={classes.learnButton}
                      style={{
                        color: 'white',
                        borderColor: 'white',
                        marginTop: '0.5rem',
                      }}
                      onClick={() => setValue(4)}
                    >
                      <span style={{ marginLeft: 10, marginRight: 10 }}>
                        Learn More
                      </span>
                      <ButtonArrow width={10} height={10} fill='white' />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*-----Call to Action-----*/}
          <CallToAction setValue={setValue} />
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
