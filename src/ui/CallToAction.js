import React from 'react';
import { Grid, Typography, Button, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ButtonArrow from './ButtonArrow';
import Link from '../Link';

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  background: {
    backgroundImage: `url('/assets/background.jpg')`,
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url('/assets/mobileBackground.jpg')`,
      backgroundAttachment: 'inherit',
    },
  },
  hireButton: {
    ...theme.typography.hire,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: '5em',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '1em',
      marginLeft: '5em',
    },
  },
}));

const CallToAction = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Grid
      container
      alignItems='center'
      className={classes.background}
      justify={matchesSM ? 'center' : 'space-between'}
      direction={matchesSM ? 'column' : 'row'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : 'inherit',
        }}
      >
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h1'>
              Interpersonal Skills.
              <br />
              Communication and Teamwork.
            </Typography>
            <Typography variant='subtitle2' style={{ fontSize: '1.5rem' }}>
              Passionate about creating beautiful products that help the world.
            </Typography>
            <Grid
              container
              item
              style={{ marginTop: '0.5em' }}
              justify={matchesSM ? 'center' : undefined}
            >
              <Button
                component={Link}
                href='/about'
                variant='outlined'
                className={classes.learnButton}
                onClick={() => setValue(2)}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          href='/hire'
          variant='contained'
          className={classes.hireButton}
          onClick={() => setValue(1000)}
        >
          Hire Me!
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
