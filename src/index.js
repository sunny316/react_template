var React = require('react');
var ReactDom = require('react-dom');
import { Grid, Radio, Fab, TextField, OutlinedInput, FormControl, InputLabel, InputAdornment, IconButton, TableFooter } from '@material-ui/core';
import { Visibility, VisibilityOff, Favorite } from '@material-ui/icons';


class LoginPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
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
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing="2"
        >
        
        <Grid item>
          <FormControl variant="outlined" style={{ width: "250px"}}>
            <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
              <OutlinedInput
                id="outlined-adornment-username"
                type='text'
                value={this.state.username}
                style={{ borderRadius: "30px"}}
                onChange={(e)=>this.handleChange(e, 'username')}
                labelWidth={70}
                required={true}
              />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl variant="outlined" style={{ width: "250px"}}>
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
          <Fab variant="extended" color="primary" style={{backgroundColor: '#41e590', width: '250px'}}>
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
          <Fab variant="extended" color="primary" style={{backgroundColor: '#fff', width: '250px', color: '#000' }}>
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
    );
  }
}

ReactDom.render(<LoginPage />, document.getElementById("app"));

