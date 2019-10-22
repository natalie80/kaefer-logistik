import React, { Component } from 'react';
import styles from './App.css';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import Validation from '../components/Validation/Validation';
import Char from '../components/Char/Char';
//import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Hoc from '../components/hoc/Hoc';
import withClass from '../components/hoc/withClass';


class App extends Component {
    constructor(prpps) {
        super (prpps);
        console.log('[App.js] constructor');
        this.state = {
            persons: [
                { id: 'p1', name: 'Max', age: '13' },
                { id: 'p2', name: 'Ole', age: '16' },
                { id: 'p3', name: 'Alex', age: '14' }
            ],
            otherState: 'some other value',
            showPersons: false,
            showUser: false,
            enteredText: '',
            maxLengthString: '5',
            minLengthString: '1',
            showCockpit: true,
            changeCounter: 0
        };
    }
 
    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate');
        //Continutie update true /not update false
        return true;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate => ', snapshot);
        return null;
    }
    
    componentWillMount() {
        console.log('[App.js] componentWillMount');
    }
    
    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }
    
    
    
    switchNameHandler = (newName) => {
        console.log('wurde button geklick -> switchNameHandler');
        this.setState({
            persons: [
                { name: newName, age: '23' },
                { name: 'Olenium', age: '26' },
                { name: 'Alexander', age: '34' }
            ]
        });
    };
    
    nameChangedHandler =  (event, id) => {
        const personIndex = this.state.persons.findIndex(p =>  {
            return p.id === id;
        });
        
        const person = { ...this.state.persons[personIndex] };
        //const person = Object.assign({}, this.state.persons[personIndex]);
        console.log('person:: ', person);
        
        person.name = event.target.value;
        const persons = [ ...this.state.persons];
        
        persons[personIndex] = person;
        
        console.log('text wurde geändert -> nameChangedHandler');
        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: this.state.changeCounter + 1
            }
        });
    };
    
    animalAddHandler = (event) => {
        console.log('animalAddHandler = ', event.target.value);
        this.setState({username: event.target.value})
    }
    
    deletePersonHandler = (index) => {
        //const persons = this.state.persons;
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    }
    
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow });
    }
    
    toggleUserHandler = () => {
        const displayuser = this.state.showUser;
        this.setState({showUser: !displayuser });
    }
    
    validationInput = (event) => {
        console.log('hier is validationInput', event.target.value,  event.target.value.length);
        this.setState({ enteredText: event.target.value});
    }
    
    deleteLetter = (index) => {
        const text = this.state.enteredText.split('');
        text.splice(index,1);
        const updatedText = text.join('');
        this.setState({enteredText: updatedText})
    }
    
    
    render() {
        console.log('[App.js] render');
        let togglePersons= null;
        
        //diese loesung ist besser
        if (this.state.showPersons) {
            togglePersons = <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} />
        }
        
        let infoText = null;
        
        if (this.state.enteredText.length > 0) {
            infoText = (
                this.state.maxLengthString > this.state.enteredText.length ? <p>Text too short</p> : <p>Text long enough</p>
        )
            // let enteredletter = this.state.enteredText.split();
            // console.log('user text', enteredletter);
            // return <CharComponent ComponentStyle={charStyle}/>
            
        }
        
        const charList = this.state.enteredText.split('').map((letter, i)=> {
            return  <Char character={letter} key={i} clicked={() => this.deleteLetter(i)}/>;
        });
        
        return (
            // <StyleRoot>
            <Hoc classes={styles.App}>
                <button
                    onClick={() => {
                        this.setState({showCockpit: false});
                    }}
                >
                    return emove Cockpit
                </button>
                {
                    this.state.showCockpit ? (
                        <Cockpit
                            title={this.props.appTitle}
                            showPersons={this.state.showPersons}
                            persons={this.state.persons}
                            personsLength={this.state.persons.length}
                            clicked={this.togglePersonsHandler}/>
                    ): null
                }
                {togglePersons}
                <hr/>
                <button onClick={this.toggleUserHandler} > Toggle Input/Output</button>
                {
                    this.state.showUser ?
                        <div className="ContainerInputOutput">
                            <UserInput changed={this.animalAddHandler}  currentName={this.state.username}/>
                            <UserOutput name={this.state.username}/>
                        </div>
                    : null
                }
                <hr/>
                <Validation changed={this.validationInput} lengthText={this.state.enteredText.length} enteredText={this.state.enteredText}/>
                {infoText}
                {charList}
            </Hoc>
             // </StyleRoot>
        );
        //   <button  onClick={this.switchNameHandler.bind(this, 'Maxim')} > switch name</button>
        // return  React.createElement('div', {className: 'app'}, React.createElement('h4', null,'Halli Hallo Ole!!'));
    }
}

//export default Radium(App);
export default withClass(App, styles.App);