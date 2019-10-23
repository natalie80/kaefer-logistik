import React, {useEffect, useRef, useContext} from 'react';
import styles from './Cockpit.css';
import AuthContext from '../context/Auth-context';


const cockpit = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const toggleBtnRef = useRef(null);
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const authConttext = useContext(AuthContext);
    
    console.log('AuthContext', authConttext.authenticated);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('useEffect');
        //can use HTTP request...
       /* const time = setTimeout(() => {
            alert('Save data!');
        }, 100);*/
        toggleBtnRef.current.click();
        return () => {
          //  clearTimeout(time)
            console.log('[Cockpit.js] cleanup work in  useeffect');
        }
        
    }, []); // [] - anzeigt, nur einmal wenn die Seite geladen wird / [props.persons]
    
    //called after render Live Cirkle
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('[Cockpit.js]  2 useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2 useeffect');
        
        }
    });
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = styles.Red;
    }
    if (props.personsLength <= 2) {
        console.log('length <= 2');
        assignedClasses.push(styles.red);
    }
    
    if (props.personsLength <= 1) {
        console.log('length <= 1');
        assignedClasses.push(styles.bold);
    }
    return (
        <div className='Cockpit'>
            <h4>{props.title}</h4>
            <p className={styles.red}>HALLO Natalie!!!!</p>
            <p className={assignedClasses.join(' ')}>Hallo alle  zusammen!!</p>
            <button
              ref={toggleBtnRef}
              className={btnClass}
              onClick={props.clicked}
            > Toggle Persons </button>
            {/*<AuthContext.Consumer>
                {(context) => <button onClick={context.login}> Log in </button>}
            </AuthContext.Consumer>
           */}
            <button onClick={authConttext.login}> Log in </button>
           
        </div>
    );
};

export default  React.memo(cockpit);