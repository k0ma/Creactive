import React, { Component } from 'react';
import Greeting from './greeting'

export default class NavigationBar extends Component{
    render(){
        return(

        <div className="jumbotron">
            <h1>cREACTive</h1>
            <Greeting loggedIn={this.props.loggedIn} username={this.props.username}/>
            <div>{this.props.children}</div>
        </div>
        )
    }
}