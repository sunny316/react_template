var React = require('react');
var ReactDom = require('react-dom');
import { Grid, Radio, Fab, OutlinedInput, FormControl, InputLabel, InputAdornment, IconButton, withStyles } from '@material-ui/core';
import { Visibility, VisibilityOff, Favorite } from '@material-ui/icons';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Fragment } from 'react';



const styles = theme => ( {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formwidth: {
    width: "300px"
  },
  header:{
    backgroundColor: "#f9f9f9",
    boxShadow: "0 0 0 0"
  },
  title:{
    flexGrow: 1,
    color: 'black'
  },
  signin: {
    fontSize: "2.8125rem",
    fontWeight: 700,
    fontStretch: "condensed",
    fontStyle: "normal",
    lineHeight: ".89",
    letterSpacing: ".9px",
    color: "#656565"
  },
  subtitle1: {
    fontSize: "1.125rem",
    fontWeight: 300,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: ".11",
    letterSpacing: ".36px",
    textAlign: "center",
    color: "#656565",
    paddingBottom: "25px",
    fontFamily: "helveticaNeueLight"
  },
  formgrid: {
    marginTop: "2%"
  }
});
class LoginPage extends React.Component{
  
  constructor(props){
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
    this.setState({  [prop]: event.target.value });
  };
  handleClickShowPassword(){
    this.setState({ showPassword: !this.state.showPassword });
  };
  render(){
    console.log(this.props);
    const { classes } = this.props;
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
          spacing={2}
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
          <Grid item>
            <FormControl variant="outlined" className={classes.formwidth}>
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  type='text'
                  value={this.state.email}
                  style={{ borderRadius: "30px"}}
                  onChange={(e)=>this.handleChange(e, 'email')}
                  labelWidth={70}
                  required={true}
                />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl variant="outlined" className={classes.formwidth}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                style={{ borderRadius: "30px"}}
                onChange={(e)=>this.handleChange(e, 'password')}
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
            flexDirection="row"
            alignItems="center"
            justify="center"
            >
              <Radio style={{color: 'rgb(122, 201, 255)' }} />
              <span style={{ marginRight: "16px", fontSize: 16, fontFamily: 'helveticaNeueLight', fontWeight: 400 }}>Remember me</span>
              <span style={{ color: '#696969', fontSize: 16, fontFamily: 'helveticaNeueLight', fontWeight: 400 }}>Forgot password ?</span>
          </Grid>
          <Grid item>
            <Fab variant="extended" color="primary" className={classes.formwidth} style={{backgroundColor: '#41e590'}}>
              Navigate
            </Fab>
          </Grid>
          <Grid container item
            direction="row"
            justify="center"
            alignItems="center">
            <div style={{ height: '1px', width: '115px', backgroundColor: '#6c6c6c' }} />
            <span style={{ color: '#6c6c6c'}}>OR</span>
            <div style={{ height: '1px', width: '115px', backgroundColor: '#6c6c6c' }} />
          </Grid>
          <Grid item>
            <Fab variant="extended" color="primary" className={classes.formwidth} style={{backgroundColor: '#fff', color: '#000' }}>
              Login with Google
            </Fab>
          </Grid>
          <Grid item>
            <div style={{ color: '#696969', fontSize: 16, fontFamily: 'helveticaNeueLight', fontWeight: 400 }}>
              Don't have an account? Sign Up
            </div>
          </Grid>
          <Grid container item
            direction="row"
            alignItems="center"
            alignContent="flex-end"
            style={{
              position: "absolute",
              left: 0,
              bottom: 0
            }}
            >
            <div style={{ color: '#656565', lineHeight: 1.17, fontSize: ".8rem", flexGrow:1 }}>
              <span>Made with </span>
              <Favorite style={{ color: 'rgb(234, 84, 85)', fontSize: ".8rem" }}/>
              <span> in Chicago</span>
            </div>
            <span style={{ color: '#C8C8C8', fontSize: "1rem", marginRight: "20px", lineHeight: 1.2 }}>Privacy Policy</span>
            <span style={{ color: '#C8C8C8', fontSize: "1rem", marginRight: "20px", lineHeight: 1.2}}>Term of use</span>
            <span style={{ color: '#C8C8C8', fontSize: "1rem", marginRight: "20px", lineHeight: 1.2}}>Helps</span>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

const Lender = withStyles(styles)(LoginPage);
ReactDom.render(<Lender />, document.getElementById("app"));

