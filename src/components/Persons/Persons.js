import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
        // console.log('[Persons.js] getDerivedStateFromProps');
        // return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return (<div>
            {this.props.persons.map((person, index) => {
              return (<Person
            click={() => this.props.delete(index)}
            key={index}
            name={person.name}
            age={person.age}
            changed={(event) => this.props.changed(event, person.id)} />)
            })}
        </div>
        );
    }
}

export default Persons;