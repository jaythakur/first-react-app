import React, { Component } from 'react';
import './Person.css';
import Aux from '../../../Auxiliary/Auxiliary'

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
    const style = {
        color: 'red'
      }
        return (<Aux>
                <h2 style={style} onClick={this.props.click}>Person: {this.props.name} {this.props.age} </h2>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
                </Aux>);
    }
}


export default Person;