import React from 'react';
import Head from 'next/head';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import Lottie from 'react-lottie';

import technologyAnimation from '../src/animations/technologyAnimation/data.json';

import CallToAction from '../src/ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

const BuildBetter = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column'>
      <Head>
        <title key='title'>Design Philosophy | Building Better</title>
        <meta
          name='description'
          key='description'
          content='Delve into design philosophy with Grant Harris, software engineer, specializing in front end development with React.'
        />
        <meta
          property='og:title'
          content='Grant Harris, Software Engineer | Build Better'
          key='og:title'
        />
        <meta property='og:url' key='og:url' content='' />
        <link rel='canonical' key='canonical' href='' />
      </Head>

      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography
          align={matchesMD ? 'center' : undefined}
          style={{ fontFamily: 'Pacifico' }}
          variant='h1'
        >
          Build Better
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems='center'
        className={classes.rowContainer}
        style={{ marginTop: '5em' }}
      >
        <Grid item lg>
          <img
            src='/assets/vision.svg'
            alt='mountain through binoculars'
            style={{
              maxWidth: matchesSM ? '300px' : '40em',
              marginRight: matchesMD ? 0 : '5em',
              marginBottom: matchesMD ? '5em' : 0,
            }}
          />
        </Grid>
        <Grid
          item
          container
          direction='column'
          lg
          align
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : 'right'}
              variant='h4'
              gutterBottom
            >
              My philosophy
            </Typography>
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : 'right'}
                variant='body1'
                paragraph
              >
                Technology touches every person on the planet. From the smallest
                transactions to the largest decisions of people's lives,
                technology is the mediary from one side to the other. This
                importance cannot be understated.
              </Typography>
              <Typography
                align={matchesMD ? 'center' : 'right'}
                variant='body1'
                paragraph
              >
                What used to be an option is now a mandatory part of people's
                lives. The responsibility ethically, effectively, and
                compassionately engage with technology is now more important
                than ever.
              </Typography>
              <Typography
                align={matchesMD ? 'center' : 'right'}
                variant='body1'
                paragraph
              >
                I want to help companies create products that effect our world
                and those who live on it in the most beneficial way possible.
              </Typography>
              <Typography
                align={matchesMD ? 'center' : 'right'}
                variant='body1'
                paragraph
              >
                By holding myself to a standard of quality, performance, and
                attention to detail, I hope to contribute to technology making
                people's lives more livable and more equitable.
              </Typography>
              <Typography
                align={matchesMD ? 'center' : 'right'}
                variant='body1'
                paragraph
              >
                It's easy to envision a future where technology is a great
                democratizer. I want to be a part of creating that future.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems='center'
        className={classes.rowContainer}
        style={{ marginTop: '10em', marginBottom: '10em' }}
      >
        <Grid item container direction='column' lg style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
            >
              Harnessing Technology
            </Typography>
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant='body1'
                paragraph
              >
                When I first started working with React, I realized that it had
                the potential to transform how websites are built. I am thrilled
                to be living in a time where responsive and accessible websites
                can be eye-catching and performant. React only makes that easier
                and more fun for us as website developers!
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant='body1'
                paragraph
              >
                It is also exciting to see sister-technologies like Vue and
                Angular push innovation in this realm. This can only be good for
                the web development community as a whole!
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant='body1'
                paragraph
              >
                I think about React's hooks documentation. It clearly states
                that it gained inspiration from how Vue goes about things, and
                was willing to change after seeing a better path forward. This
                willingness to adapt and admit to other's successes is so
                encouraging to see in the open source community.
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant='body1'
                paragraph
              >
                I hope to continue this tradition of growth and collaboration in
                order to continue web development's iterative evolution.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justify={matchesMD ? 'center' : 'flex-end'} lg>
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: '40em', margin: 0 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction='row'
        justify='center'
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant='h1' gutterBottom>
            My Design Philosophy
          </Typography>
        </Grid>
      </Grid>
      {/*-----Simplicity-----*/}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#B3B3B3', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Simplicity
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Simple design is the best design. It may be tempting to create the
              most cutting-edge and complex website that will impress your
              co-workers, but complexity may end up costing you. This cost can
              land anywhere from your site not working, to it being difficult to
              maintain, or even being impossible for another dev to work on.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Besides, a site clean of clutter is nicer to look at and easier to
              navigate. Nobody wants to go on a treasure hunt when visiting a
              website for a specific purpose, unless it's a treasure hunting
              website.
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ alignSelf: 'center' }} lg>
          <img
            src='/assets/consultationIcon.svg'
            alt='handshake'
            width='100%'
            style={{ maxWidth: '50em' }}
          />
        </Grid>
      </Grid>
      {/*-----Responsive Design-----*/}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#FF7373', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Responsive Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Your site's ability to scale from XL to XS size screens is not
              just a nice feature, it's of the utmost importance. Your site
              could look amazing on a big screen, but if it is a dumpster fire
              on a Samsung Galaxy S5, then likely losing out on your biggest
              market.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              If your responsive design leads to a less performant site, that
              can't be the correct solution.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              A site's ability to responsively scale to any screen size is so
              important, I've made a point to dive deeply into the different
              responsive development options available in libraries, such as
              Material UI.
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ alignSelf: 'center' }} lg>
          <img
            src='/assets/mockupIcon.svg'
            alt='basic website design outline'
            style={{
              marginTop: matchesSM ? '2em' : undefined,
              maxWidth: '50em',
            }}
            width='100%'
          />
        </Grid>
      </Grid>

      {/*-----Readability-----*/}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#A67C52', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Readability
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              SEO's importance in a successful website cannot be
              under-estimated, and the readability of your site is one of the
              key aspects that crawlers look for when rating sites. The goal
              should be to keep your text readable and appealing to visitors.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Be sure that your fonts achieve this goal and that you remain
              consistent throughout your site in regards to your different text
              styles. I like to manage these elements via JSS and a theme.js
              file that I can use as a master style document.
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ alignSelf: 'center' }} lg>
          <img
            src='/assets/designIcon.svg'
            alt='paintbrush leaving stroke of paint'
            style={{ maxWidth: matchesSM ? '35em' : undefined }}
            width='100%'
          />
        </Grid>
      </Grid>
      {/*-----Consistency-----*/}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#39B54A', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Consistency
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Creating a design that matches throughout the site is invaluable
              to create a cohesive user experience. This means a uniform color
              palette, buttons, typography, and pretty everything else!
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              In order to achieve this, planning is crucial. This is where the
              dev team, stakeholders, and everyone in between needs to be on the
              same page and informed with the most up-to-date information
              regarding the site mockup. I have found Adobe XD to be a great
              tool for this process.
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ alignSelf: 'center' }} lg>
          <img
            src='/assets/reviewIcon.svg'
            alt='magnifying glass'
            width='100%'
            style={{
              marginTop: matchesSM ? '2em' : undefined,
              maxWidth: matchesSM ? '25em' : '50em',
            }}
          />
        </Grid>
      </Grid>
      {/*-----Simple Navigation-----*/}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#FBB03B', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Simple Navigation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              The easier your navigation is, the more likely your site visitors
              will stick around. Once again, if your visitors have to go on a
              treasure hunt of menu clicking to get to the information they
              desire, they're probably going to give up.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Keeping it simple also helps the dev team not get lost in things
              like React-Router wormholes, spending valuable time on something
              that won't be valuable, anyways!
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ alignSelf: 'center' }} lg>
          <img
            src='/assets/buildIcon.svg'
            alt='crane at construction site'
            style={{ maxWidth: matchesMD ? '30em' : '50em' }}
            width='100%'
          />
        </Grid>
      </Grid>
      {/*-----Optimization-----*/}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#C1272D', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Optimization
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Performance is everything, and complex websites have a tendency to
              get bogged down. Even small drops in load times can be disastrous
              to a site's conversion rate. Milliseconds matter!
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              The ability for a site to load quickly, reliably, and smoothly
              will be the difference between your project's success or failure.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Why have a jpeg when you can have an svg? Why have a sub-optimal
              svg when you could optimize it? It's the little things that add up
              to a performant website!
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ alignSelf: 'center' }} lg>
          <img
            src='/assets/maintainIcon.svg'
            alt='wrench tightening bolts'
            style={{ maxHeight: matchesMD ? '40em' : undefined }}
          />
        </Grid>
      </Grid>

      {/*-----Communication-----*/}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#29ABE2', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Communication
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              A website should provide the information that you wish to give to
              your visitors in an easily-digestible manner. This should come
              across as effortless and pleasant!
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Use bullet points and effective headers and sub-headers when
              possible. Too much text puts people to sleep. We've all been
              there! In fact, if you've reached the bottom of this page, then
              kudos!
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ alignSelf: 'center' }} lg>
          <img
            src='/assets/iterateIcon.svg'
            alt='falling dominoes'
            width='100%'
          />
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Call to Action-----*/}
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default BuildBetter;
