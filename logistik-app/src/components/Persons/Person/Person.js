import React, {Component, Fragment} from 'react';
import styles from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props){
        super (props);
        //use Ref Hook
        this.inputElementRef = React.createRef();
    }
    
    componentDidMount() {
        this.inputElementRef.current.focus();
    }
    
    render() {
        console.log('[Person.js] rendering...');
       return (
           <Fragment>
               <div className={styles.Person} >
                   <p>First Container</p>
                   <p onClick={this.props.click} >Ich bin {this. props.name } und { this.props.age } Jahre alt</p>
                   <p> {this.props.children } </p>
                   <input
                       type="text"
                       onChange={this.props.changed}
                       value={this.props.name}
                       ref={this.inputElementRef}
                   />
               </div>,
               <div>
                   <p>Second Container</p>
               </div>
           </Fragment>
           
       );
    }
}

// eslint-disable-next-line react/no-typos
Person.PropTypes = {
    click: PropTypes.func,
    name:  PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};


export default Person;