var React = require('react');
var ReactDom = require('react-dom');
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/icons';

class LoginPage extends React.Component{
  render(){
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
        <Fab variant="extended" color="primary" style={{backgroundColor: '#41e590', width: '250px', marginBottom: '20px' }}>
          Navigate
        </Fab>
        <Grid
         container
         direction="row"
         justify="center"
         alignItems="center"
         style={{ marginBottom: '20px' }}
        >
          <div style={{ height: '1px', width: '115px', backgroundColor: '#6c6c6c' }} />
          <span style={{ color: '#6c6c6c'}}>OR</span>
          <div style={{ height: '1px', width: '115px', backgroundColor: '#6c6c6c' }} />
        </Grid>
        <Fab variant="extended" color="primary" style={{backgroundColor: '#fff', width: '250px', color: '#000' }}>
          Login with Google
        </Fab>
      </Grid>
    );
  }
}

ReactDom.render(<LoginPage />, document.getElementById("app"));

