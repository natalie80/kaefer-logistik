import React, {Component, Fragment} from 'react';
import styles from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../context/Auth-context';

class Person extends Component {
    constructor(props){
        super (props);
        //use Ref Hook
        this.inputElementRef = React.createRef();
    }
    
    static  contextType = AuthContext;
    
    componentDidMount() {
        this.inputElementRef.current.focus();  // this.inputElement.focus()
        console.log('AuthContext', this.context.authenticated);
    }
    
    render() {
        console.log('[Person.js] rendering...');
       return (
           <Fragment>
               <div className={styles.Person} >
          
                   {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log In!</p>}
                   
                   <p>First Container</p>
                   <p onClick={this.props.click} >Ich bin {this. props.name } und { this.props.age } Jahre alt</p>
                   <p> {this.props.children } </p>
                   <input
                       type="text"
                       onChange={this.props.changed}
                       value={this.props.name}
                       ref={this.inputElementRef}  // also possible is:  ref={(inputEl) => {this.inputElement = inputEl}}
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