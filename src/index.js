var React = require('react');
var ReactDom = require('react-dom');
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class LoginPage extends React.Component{
  render(){
    return (
      <Grid
        container
        direction="row"
        >
        <Grid item xs={4}>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </Grid>
      </Grid>
    );
  }
}

ReactDom.render(<LoginPage />, document.getElementById("app"));

