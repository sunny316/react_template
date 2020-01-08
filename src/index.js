var React = require('react');
var ReactDom = require('react-dom');
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


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
          <div style={{ color: '#6c6c6c'}}>
            Don't have an account? Sign Up
          </div>
        </Grid>
      </Grid>
    );
  }
}

ReactDom.render(<LoginPage />, document.getElementById("app"));

