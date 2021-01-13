import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Button,
  TextField,
  useMediaQuery,
  Dialog,
  DialogContent,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';

import ButtonArrow from '../src/ui/ButtonArrow';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url('/assets/background.jpg')`,
    backgroundPosition: 'center',

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url('/assets/mobileBackground.jpg')`,
      backgroundAttachment: 'fixed',
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
    [theme.breakpoints.down('md')]: {
      marginTop: '1em',
      marginLeft: '5em',
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const Contact = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  });

  const onChange = (e) => {
    let valid;

    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        if (!valid) {
          setEmailHelper('Invalid Email');
        } else {
          setEmailHelper('');
        }
        break;
      case 'phone':
        setPhone(e.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );

        if (!valid) {
          setPhoneHelper('Invalid Phone');
        } else {
          setPhoneHelper('');
        }
        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);
    axios
      .get(
        'https://us-central1-arcdevelopment-bc6a6.cloudfunctions.net/sendMail',
        {
          params: {
            name,
            email,
            phone,
            message,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setAlert({
          open: true,
          message: 'Message sent successfully!',
          backgroundColor: '#4BB543',
        });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: true,
          message: 'Something went wrong, please try again!',
          backgroundColor: '#FF3232',
        });
      });
  };

  const buttonContents = (
    <>
      Send Messages
      <img
        src='/assets/send.svg'
        alt='paper airplane'
        style={{ marginLeft: '1em' }}
      />
    </>
  );

  return (
    <Grid container direction='row'>
      <Head>
        <title key='title'>Contact Me | Hiring</title>
        <meta
          name='description'
          key='description'
          content='Interested in learning more or hiring?  Contact Grant Harris, software engineer, specializing in front end development with React.'
        />
        <meta
          property='og:title'
          content='Grant Harris, Software Engineer | Contact Me'
          key='og:title'
        />
        <meta property='og:url' key='og:url' content='' />
        <link rel='canonical' key='canonical' href='' />
      </Head>
      <Grid
        item
        container
        direction='column'
        justify='center'
        alignItems='center'
        style={{
          marginBottom: matchesMD ? '5em' : 0,
          marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography
                variant='h1'
                style={{ lineHeight: 1 }}
                align={matchesMD ? 'center' : undefined}
              >
                Let's Talk!
              </Typography>

              <Typography
                variant='body1'
                style={{ color: theme.palette.common.blue }}
                align={matchesMD ? 'center' : undefined}
              >
                I'd love to hear from you.
              </Typography>
            </Grid>
            <Grid
              item
              container
              style={{ marginTop: '2em' }}
              justify={matchesMD ? 'center' : undefined}
            >
              <Grid item>
                <img
                  src='/assets/phone.svg'
                  alt='phone'
                  style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    href='tel:2076941073'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    (207) 694-1073
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              style={{ marginBottom: '2em' }}
              justify={matchesMD ? 'center' : undefined}
            >
              <Grid item>
                <img
                  src='/assets/email.svg'
                  alt='phone'
                  style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    href='mailto:grantxvx@gmail.com'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    grantxvx@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction='column' style={{ width: '20em' }}>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label='Name'
                  id='name'
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label='Email'
                  id='email'
                  error={emailHelper.length !== 0 && email.length > 0}
                  helperText={email.length > 0 ? emailHelper : undefined}
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label='Phone'
                  id='phone'
                  error={phoneHelper.length !== 0 && phone.length > 0}
                  helperText={phone.length > 0 ? phoneHelper : undefined}
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ width: '20em', marginTop: '3.5em' }}>
              <Typography
                align='center'
                variant='h4'
                style={{ marginBottom: '0.25em' }}
              >
                Your Message
              </Typography>
              <TextField
                value={message}
                id='message'
                fullWidth
                multiline
                placeholder='Ask me anything'
                className={classes.message}
                InputProps={{
                  disableUnderline: true,
                }}
                onChange={(e) => setMessage(e.target.value)}
                rows={10}
              />
            </Grid>
            <Grid item container justify='center' style={{ marginTop: '2em' }}>
              <Button
                variant='contained'
                className={classes.sendButton}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                onClick={() => setOpen(true)}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        style={{ zIndex: 1302 }}
        fullScreen={matchesSM}
        PaperProps={{
          style: {
            paddingTop: matchesSM ? '1em' : '3.5em',
            paddingBottom: matchesSM ? '1em' : '3.5em',
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? '3.5em'
              : matchesMD
              ? '7em'
              : '10em',
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? '3.5em'
              : matchesMD
              ? '7em'
              : '10em',
          },
        }}
      >
        <DialogContent>
          <Grid container direction='column'>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                Confirm Message
              </Typography>
            </Grid>

            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Name'
                id='name'
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Email'
                id='email'
                error={emailHelper.length !== 0 && email.length > 0}
                helperText={email.length > 0 ? emailHelper : undefined}
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Phone'
                id='phone'
                error={phoneHelper.length !== 0 && phone.length > 0}
                helperText={phone.length > 0 ? phoneHelper : undefined}
                fullWidth
                value={phone}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              minWidth: matchesSM ? '20em' : '30em',
              maxWidth: matchesSM ? '100%' : '20em',
              marginTop: '3.5em',
            }}
          >
            <Typography
              align='center'
              variant='h4'
              style={{ marginBottom: '0.25em' }}
            >
              Your Message
            </Typography>
            <TextField
              value={message}
              id='message'
              fullWidth
              multiline
              className={classes.message}
              InputProps={{
                disableUnderline: true,
              }}
              onChange={(e) => setMessage(e.target.value)}
              rows={10}
            />
          </Grid>
          <Grid
            item
            container
            direction='column'
            alignItems='center'
            style={{ marginTop: '2em' }}
            justify='center'
          >
            <Grid item>
              <Button
                variant='contained'
                className={classes.sendButton}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                onClick={onConfirm}
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
            </Grid>
            <Grid item>
              <Button
                color='primary'
                onClick={() => setOpen(false)}
                style={{ marginTop: '1em' }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
      {/*-----Call to Action-----*/}
      <Grid
        item
        container
        justify={matchesMD ? 'center' : undefined}
        alignItems={matchesMD ? 'center' : 'flex-start'}
        direction='column'
        className={classes.background}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : '2em',
            marginTop: matchesMD ? 0 : '5em',
            marginBottom: matchesMD ? undefined : '5em',
            textAlign: matchesMD ? 'center' : 'inherit',
          }}
        >
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h1' align={matchesMD ? 'center' : undefined}>
                Interpersonal Skills.
                <br />
                Communication and Teamwork.
              </Typography>
              <Typography
                variant='subtitle2'
                style={{ fontSize: '1.5rem' }}
                align={matchesMD ? 'center' : undefined}
              >
                Passionate about creating beautiful products <br /> that help
                the world.
              </Typography>
              <Grid
                container
                item
                style={{ marginTop: '0.5em' }}
                justify={matchesMD ? 'center' : undefined}
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
        <Grid
          item
          style={{
            marginLeft: matchesMD ? undefined : '16em',
            marginTop: matchesMD ? undefined : '-7em',
          }}
        >
          <Button
            component={Link}
            href='/hire'
            variant='contained'
            className={classes.hireButton}
            onClick={() => setValue(1000)}
            style={{
              marginBottom: matchesMD ? undefined : '4em',
            }}
          >
            Hire Me!
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
