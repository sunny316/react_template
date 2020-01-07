var React = require('react');
var ReactDom = require('react-dom');

class LoginPage extends React.Component{
  render(){
    return (
      <div> hello world</div>
    );
  }
}

ReactDom.render(<LoginPage />, document.getElementById("app"));

