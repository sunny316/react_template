var React = require('react');
var ReactDom = require('react-dom');
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
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
      fontSize: "0.875rem"
    },
    [theme.breakpoints.up(2560)]: {
      minHeight: "80px",
      fontSize: "1.05rem"
    },
    [theme.breakpoints.up(3200)]: {
      minHeight: "96px",
      fontSize: "1.15rem"
    },
    [theme.breakpoints.up(3840)]: {
      minHeight: "112px",
      fontSize: "1.25rem"
    },
    [theme.breakpoints.up(4600)]: {
      minHeight: "128px",
      fontSize: "1.35rem"
    },
    [theme.breakpoints.up(5200)]: {
      minHeight: "146px",
      fontSize: "1.45rem"
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
    fontWeight: 700,
    fontStretch: "condensed",
    fontStyle: "normal",
    letterSpacing: ".9px",
    color: "#656565"
  },
  subtitle1: {
    fontWeight: 300,
    fontStretch: "normal",
    fontStyle: "normal",
    textAlign: "center",
    color: "#656565",
    // fontFamily: "helveticaNeueLight"
  },
  formgrid: {
    marginTop: "2%"
  },
  rememberText: {
    marginRight: "16px",
    fontFamily: 'helveticaNeueLight',
    fontWeight: 400
  },
  forgotText: {
    color: '#696969',
    fontFamily: 'helveticaNeueLight',
    fontWeight: 400
  },
  noAccountText: {
    color: '#696969',
    fontFamily: 'helveticaNeueLight',
    fontWeight: 400,
  },
  dividerStyle: {
    height: '1px',
    width: '8%',
    backgroundColor: '#6c6c6c',
    [theme.breakpoints.down(1920)]: {
      width: "115px",
    },
  },
  emaillabel: {
    transform:"translate(50%,155%) scale(1)"
  },
  passlabel: {
    transform:"translate(30%,155%) scale(1)"
  },
  footerContainer: {
    position: "absolute",
    left: 0,
    bottom: 0
  },
  footerText: {
    color: '#656565',
    flexGrow: 1
  },
  footerLoveIcon: {
    color: 'rgb(234, 84, 85)', 
  },
  footerPrivacyText: {
    color: '#C8C8C8',
    marginRight: "20px",
  }
});

const HOC = (LoginPage) => {
  return (props) => {
    // const theme = useTheme();
    // theme.spacing.unit
    let spacing = 2;
    let borderRadius = "30px";
    let labelWidth = 18;
    const media1920 = useMediaQuery(theme.breakpoints.down(1920));
    const media2560 =  useMediaQuery(theme.breakpoints.between(1920, 2560));
    const media3200 =  useMediaQuery(theme.breakpoints.between(2560, 3200));
    const media3840 = useMediaQuery(theme.breakpoints.between(3200, 3840));
    const media4600 = useMediaQuery(theme.breakpoints.between(3840, 4600));
    const media5200 = useMediaQuery(theme.breakpoints.between(4600, 5200));
    const media5200up = useMediaQuery(theme.breakpoints.up(5200));
    if(media1920){
      spacing = 2; // 4px multiplier up and down space so 16px(2*4 + 2*4) spacing
      labelWidth = 30;
      borderRadius = "30px";
    }else if(media2560){
      spacing = 3;
      labelWidth = 50;
      borderRadius = "32px";
    }else if(media3200) {
      spacing = 4;
      labelWidth = 65;
      borderRadius = "40px";
    }else if(media3840) {
      spacing = 6;
      labelWidth = 74;
      borderRadius = "48px";
    }else if(media4600) {
      spacing = 8;
      labelWidth = 80;
      borderRadius = "56px";
    }else if(media5200) {
      spacing = 10;
      labelWidth = 84;
      borderRadius = "64px";
    }else if(media5200up) {
      spacing = 10;
      labelWidth = 86;
      borderRadius = "73px";
    }
    console.log(spacing);
    return(
       <LoginPage {...props} spacing={spacing} borderRadius={borderRadius} labelWidth={labelWidth} />
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
    const { classes, spacing, borderRadius, labelWidth } = this.props;
    console.log(labelWidth);
    return (
      <Fragment>
        <AppBar position="static" className={classes.header}>
          <Toolbar>
            <ThemeProvider theme={theme}> 
              <Typography variant="h6" className={classes.title}>
                Sample App
              </Typography>
            </ThemeProvider>
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
            <ThemeProvider theme={theme}>
              <Typography variant="h3" className={classes.signin}>
                SIGN IN
              </Typography>
            </ThemeProvider>
          </Grid>
          <Grid item>
            <ThemeProvider theme={theme}>
              <Typography variant="subtitle1" className={classes.subtitle1}>
                Enter your email and password to login
              </Typography>
            </ThemeProvider>
          </Grid>
          <Grid item className={classes.formwidth}>
            <FormControl variant="outlined" className={classes.insideFormWidth}>
              <InputLabel htmlFor="outlined-adornment-email" className={classes.emaillabel}>
                <ThemeProvider theme={theme}>
                  <Typography variant="body2">
                    Email
                  </Typography>
                </ThemeProvider>
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type='text'
                value={this.state.email}
                style={{ borderRadius: borderRadius }}
                onChange={(e) => this.handleChange(e, 'email')}
                labelWidth={labelWidth}
                required={true}
                className={classes.inputBox}
              />
            </FormControl>
          </Grid>
          <Grid item className={classes.formwidth}>
            <FormControl variant="outlined" className={classes.insideFormWidth}>
              <InputLabel htmlFor="outlined-adornment-password" className={classes.passlabel}>
                <ThemeProvider theme={theme}>
                  <Typography variant="body2">
                    Password
                  </Typography>
                </ThemeProvider>
                </InputLabel>
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
                labelWidth={labelWidth*1.6}
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
            <ThemeProvider theme={theme}>
              <Typography variant="subtitle1" className={classes.rememberText}>
                Remember me
              </Typography>
              <Typography variant="subtitle1" className={classes.forgotText}>
                Forgot password ?
              </Typography>
            </ThemeProvider>
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
            <ThemeProvider theme={theme}>
              <Typography variant="subtitle1" style={{ color: '#6c6c6c' }}>
                  OR  
              </Typography>
            </ThemeProvider>
            <div className={classes.dividerStyle} />
          </Grid>
          <Grid item className={classes.formwidth}>
            <Fab variant="extended" color="primary" className={classes.insideFormWidth} style={{ backgroundColor: '#fff', color: '#000', borderRadius: borderRadius }}>
              Login with Google
            </Fab>
          </Grid>
          <Grid item>
            <ThemeProvider theme={theme}>
              <Typography variant="subtitle1" className={classes.noAccountText}>
              Don't have an account? Sign Up
              </Typography>
            </ThemeProvider>
          </Grid>
          <Grid container item
            direction="row"
            alignItems="center"
            alignContent="flex-end"
            className={classes.footerContainer}
          >
            {/* <div className={classes.footerText}>
              <span>Made with </span>
              
              <span> in Chicago</span>
            </div> */}
            <ThemeProvider theme={theme}>
              <Typography variant="subtitle1" className={classes.footerText}>
                  Made with <Favorite className={classes.footerLoveIcon} /> in Chicago
              </Typography>
              <Typography variant="subtitle1" className={classes.footerPrivacyText}>
                  Privacy Policy
              </Typography>
              <Typography variant="subtitle1" className={classes.footerPrivacyText}>
                  Terms of use
              </Typography>
              <Typography variant="subtitle1" className={classes.footerPrivacyText}>
                  Help
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
let theme = createMuiTheme();
function scalefontsize(basesize){
  console.log(basesize);
  
  return {
    fontSize: basesize.toString() + 'rem',
    [theme.breakpoints.up('xl')]: {
      fontSize: (basesize*1.2).toString() + 'rem',
    },
    [theme.breakpoints.up(2560)]: {
      fontSize: (basesize*1.45).toString() + 'rem',
    },
    [theme.breakpoints.up(3200)]: {
      fontSize: (basesize*1.65).toString() + 'rem',
    },
    [theme.breakpoints.up(3840)]: {
      fontSize: (basesize*1.85).toString() + 'rem',
    },
    [theme.breakpoints.up(4600)]: {
      fontSize: (basesize*2.05).toString() + 'rem',
    },
    [theme.breakpoints.up(5200)]: {
      fontSize: (basesize*2.25).toString() + 'rem',
    },
  }
}
theme.typography.subtitle1 = scalefontsize(1.1);
theme.typography.h3 = scalefontsize(1.8);
theme.typography.h6 = scalefontsize(1.5);
theme.typography.body2 = scalefontsize(0.9);
// theme = responsiveFontSizes(theme);
const Lender = withStyles(styles)(HOC(LoginPage));
ReactDom.render(<Lender />, document.getElementById("app"));

