import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';
//import Radium, { StyleRoot } from 'radium';

class App extends Component {
    state = {
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
        minLengthString: '1'
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
    }
    
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
        this.setState({persons: persons});
    }
    
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
        const mystyle = {
            backgroundColor: 'green',
            border: '1px solid blue',
            color: 'white',
            padding: '5px',
            cursor: 'pointer',
            margin: '10px'
            // ':hover': {
            //    backgroundColor: 'lightgreen',
            //     color: 'black'
            //  }
        };
        
        let togglePersons= null;
        //diese loesung ist besser
        if (this.state.showPersons) {
            togglePersons = (
                <div className="ContainerPerson">
                {
                    this.state.persons.map((person, index) => {
                        return  <Person
                        name={person.name}
                        age={person.age}
                        click={() => this.deletePersonHandler(index)}
                        key={person.id}
                        changed={(event) => this.nameChangedHandler(event, person.id)}
                        />
                    })
                }
                </div>
        );
            mystyle.backgroundColor = 'red';
            mystyle[':hover'] = {
                backgroundColor: 'lightred',
                color: 'black'
            }
        }
        //let classes = ['red', 'bold'].join(' ');
        let classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        
        if (this.state.persons.length <= 1) {
            classes.push('bold');
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
            <div className="app">
            <p className={classes.join(' ')}>Hallo alle  zusammen!!</p>
        <button style={mystyle} onClick={this.togglePersonsHandler} > Toggle Persons </button>
        {togglePersons}
    <hr/>
        <h4>Task-1 UserInput and UserOutput Components</h4>
        <button onClick={this.toggleUserHandler} > Toggle Input/Output</button>
        {
            this.state.showUser ?
        <div className="ContainerInputOutput">
            <UserInput changed={this.animalAddHandler} currentName={this.state.username}/>
        <UserOutput name={this.state.username}/>
        </div>
        : null
        }
    <hr/>
        <h4>Task-2 Validation and Char Components</h4>
        <Validation changed={this.validationInput} lengthText={this.state.enteredText.length} enteredText={this.state.enteredText}/>
        {infoText}
        {charList}
    </div>
        // </StyleRoot>
    );
        //   <button  onClick={this.switchNameHandler.bind(this, 'Maxim')} > switch name</button>
        // return  React.createElement('div', {className: 'app'}, React.createElement('h4', null,'Halli Hallo Ole!!'));
    }
}

//export default Radium(App);
export default App;