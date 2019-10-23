import React, { PureComponent } from 'react';
import Person from './Person/Person';




class Persons extends PureComponent {
    //static getDerivedStateFromProps(props, state) {
     //   console.log('[Persons.js] getDerivedStateFromProps');
    // return state;
    //}
    
  /*  shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Persons.js] shouldComponentUpdate');
        
        //Component wird nicht gerendet, wenn nicht benutzt wird
       if (nextProps.persons !== this.props.persons ||
            nextProps.clicked !== this.props.clicked ||
            nextProps.changed !== this.props.changed
        
        ) {
            console.log('[Persons.js] Bin in IF ');
            return true;
        } else {
            return  false;
        }
        //Continutie update true /not update false
       
    } */
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'TEST!'};
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate => ', snapshot);
        return null;
    }
    
    componentDidMount() {
        console.log('[Persons.js] componentDidMount');
        return null;
    }
    
    // Code ausgeführt wird direkt bevor die Kmponente entfernt wird
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }
    
    render() {
        console.log('[Persons.js] rendering...');
        return (
           this.props.persons.map((person, index) => {
                return <Person
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
                />
            })
        );
    }
}

export default Persons;
