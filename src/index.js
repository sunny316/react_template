var React = require('react');
var ReactDom = require('react-dom');
import { Grid, Radio, Fab, OutlinedInput, FormControl, InputLabel, InputAdornment, IconButton, withStyles, useTheme, useMediaQuery } from '@material-ui/core';
import { Visibility, VisibilityOff, Favorite } from '@material-ui/icons';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Fragment } from 'react';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formwidth: {
    width: "300px",
    [theme.breakpoints.up(1920)]: {
      width: "20%",
    },
  },
  inputBox: {
    width: "100%",
    minHeight: "56px",
    [theme.breakpoints.up(1920)]: {
      minHeight: "64px",
    },
    [theme.breakpoints.up(2560)]: {
      minHeight: "80px",
    },
    [theme.breakpoints.up(3200)]: {
      minHeight: "96px",
    },
    [theme.breakpoints.up(3840)]: {
      minHeight: "112px",
    },
    [theme.breakpoints.up(4600)]: {
      minHeight: "128px",
    },
    [theme.breakpoints.up(5200)]: {
      minHeight: "146px",
    },
  },
  insideFormWidth: {
    width: "100%",
    height: "100%",
    minHeight: "56px",
    [theme.breakpoints.up(1920)]: {
      minHeight: "64px",
    },
    [theme.breakpoints.up(2560)]: {
      minHeight: "80px",
    },
    [theme.breakpoints.up(3200)]: {
      minHeight: "96px",
    },
    [theme.breakpoints.up(3840)]: {
      minHeight: "112px",
    },
    [theme.breakpoints.up(4600)]: {
      minHeight: "128px",
    },
    [theme.breakpoints.up(5200)]: {
      minHeight: "146px",
    },
  },
  header: {
    backgroundColor: "#f9f9f9",
    boxShadow: "0 0 0 0"
  },
  title: {
    flexGrow: 1,
    color: 'black'
  },
  signin: {
    fontSize: "2.8125rem",
    fontWeight: 700,
    fontStretch: "condensed",
    fontStyle: "normal",
    letterSpacing: ".9px",
    color: "#656565"
  },
  subtitle1: {
    fontSize: "1.125rem",
    fontWeight: 300,
    fontStretch: "normal",
    fontStyle: "normal",
    letterSpacing: ".36px",
    textAlign: "center",
    color: "#656565",
    fontFamily: "helveticaNeueLight"
  },
  formgrid: {
    marginTop: "2%"
  },
  rememberText: {
    marginRight: "16px",
    fontSize: 16,
    fontFamily: 'helveticaNeueLight',
    fontWeight: 400
  },
  forgotText: {
    color: '#696969',
    fontSize: 16,
    fontFamily: 'helveticaNeueLight',
    fontWeight: 400
  },
  noAccountText: {
    color: '#696969',
    fontSize: 16,
    fontFamily: 'helveticaNeueLight',
    fontWeight: 400,
  },
  dividerStyle: {
    height: '1px',
    width: '115px',
    backgroundColor: '#6c6c6c',
  },
  footerContainer: {
    position: "absolute",
    left: 0,
    bottom: 0
  },
  footerText: {
    color: '#656565',
    lineHeight: 1.17,
    fontSize: ".8rem",
    flexGrow: 1
  },
  footerLoveIcon: {
    color: 'rgb(234, 84, 85)', 
    fontSize: ".8rem",
  },
  footerPrivacyText: {
    color: '#C8C8C8',
    fontSize: "1rem",
    marginRight: "20px",
    lineHeight: 1.2,
  }
});

const HOC = (LoginPage) => {
  return (props) => {
    const theme = useTheme();
    let spacing = 2;
    let borderRadius = "30px";
    const media1920 = useMediaQuery(theme.breakpoints.down(1920));
    const media2560 =  useMediaQuery(theme.breakpoints.between(1920, 2560));
    const media3200 = useMediaQuery(theme.breakpoints.between(3200, 3840));
    const media3840 = useMediaQuery(theme.breakpoints.between(3840, 4600));
    const media4600 = useMediaQuery(theme.breakpoints.between(4600, 5200));
    const media5200 = useMediaQuery(theme.breakpoints.up(5200));
    if(media1920){
      spacing = 2; // 4px multiplier up and down space so 16px(2*4 + 2*4) spacing
      borderRadius = "30px";
    }else if(media2560){
      spacing = 3;
      borderRadius = "40px";
    }else if(media3200) {
      spacing = 4;
      borderRadius = "48px";
    }else if(media3840) {
      spacing = 6;
      borderRadius = "56px";
    }else if(media4600) {
      spacing = 8;
      borderRadius = "64px";
    }else if(media5200) {
      spacing = 10;
      borderRadius = "73px";
    }
    console.log(spacing);
    return(
       <LoginPage {...props} spacing={spacing} borderRadius={borderRadius} />
    )
  }
}
class LoginPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      showPassword: false,
    };
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event, prop) {
    this.setState({ [prop]: event.target.value });
  };
  handleClickShowPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  };
  render() {
    const { classes, spacing, borderRadius } = this.props;
    return (
      <Fragment>
        <AppBar position="static" className={classes.header}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Sample App
            </Typography>
            <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={spacing}
          className={classes.formgrid}
        >
          <Grid item>
            <Typography variant="h3" className={classes.signin}>
              SIGN IN
            </Typography>
          </Grid>
          <Grid item>
            <p className={classes.subtitle1}>
              Enter your email and password to login
            </p>
          </Grid>
          <Grid item className={classes.formwidth}>
            <FormControl variant="outlined" className={classes.insideFormWidth}>
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type='text'
                value={this.state.email}
                style={{ borderRadius: borderRadius }}
                onChange={(e) => this.handleChange(e, 'email')}
                labelWidth={70}
                required={true}
                className={classes.inputBox}
              />
            </FormControl>
          </Grid>
          <Grid item className={classes.formwidth}>
            <FormControl variant="outlined" className={classes.insideFormWidth}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                style={{ borderRadius: borderRadius }}
                onChange={(e) => this.handleChange(e, 'password')}
                className={classes.inputBox}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
                required={true}
              />
            </FormControl>
          </Grid>
          <Grid item
            container
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Radio style={{ color: 'rgb(122, 201, 255)' }} />
            <span className={classes.rememberText}>Remember me</span>
            <span className={classes.forgotText}>Forgot password ?</span>
          </Grid>
          <Grid item className={classes.formwidth}>
            <Fab variant="extended" color="primary" className={classes.insideFormWidth} style={{ backgroundColor: '#41e590', borderRadius: borderRadius }}>
              Navigate
            </Fab>
          </Grid>
          <Grid container item
            direction="row"
            justify="center"
            alignItems="center">
            <div className={classes.dividerStyle} />
            <span style={{ color: '#6c6c6c' }}>OR</span>
            <div className={classes.dividerStyle} />
          </Grid>
          <Grid item className={classes.formwidth}>
            <Fab variant="extended" color="primary" className={classes.insideFormWidth} style={{ backgroundColor: '#fff', color: '#000', borderRadius: borderRadius }}>
              Login with Google
            </Fab>
          </Grid>
          <Grid item>
            <div className={classes.noAccountText}>
              Don't have an account? Sign Up
            </div>
          </Grid>
          <Grid container item
            direction="row"
            alignItems="center"
            alignContent="flex-end"
            className={classes.footerContainer}
          >
            <div className={classes.footerText}>
              <span>Made with </span>
              <Favorite className={classes.footerLoveIcon} />
              <span> in Chicago</span>
            </div>
            <span  className={classes.footerPrivacyText}>Privacy Policy</span>
            <span  className={classes.footerPrivacyText}>Term of use</span>
            <span  className={classes.footerPrivacyText}>Helps</span>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

const Lender = withStyles(styles)(HOC(LoginPage));
ReactDom.render(<Lender />, document.getElementById("app"));

