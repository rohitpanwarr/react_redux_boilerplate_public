import JQuery from 'jquery';
import React from 'react';
import { connect } from 'react-redux';
import { demoAction } from '../actions/demoAction';
import CONSTANTS from './../constants';

window.$ = window.JQuery = JQuery;

class App extends React.Component {
    componentDidMount() {
        const text = this.props.dispatch(demoAction(CONSTANTS.DEMO)).payload;
    };

    render = () => {
        console.log('props: ', this.props.appData.default)
        return (
            <div className="container">
                <h1>React Redux Boilerplate</h1>
                <p>{this.props.appData.default}</p>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(App);
  
