import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import { connect } from 'react-redux';
import { ageUp } from './actions/ageUp';
import { ageDown } from './actions/ageDown';

class App extends Component {
  render() {
    console.log(this.props.age)
    return (
      <div className="App">
        <header className="App-header">
          <Button variant="contained" color="primary" onClick={() => this.props.ageUp()}> Age Up </Button>
          <h1>{this.props.age}</h1>
          <Button variant="contained" color="primary" onClick={() => this.props.ageDown()}> Age Down </Button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  ageUp: (payload) => dispatch(ageUp(payload)),
  ageDown: (payload) => dispatch(ageDown(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
