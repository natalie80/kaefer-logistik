import React, { useState } from 'react';
import axios from '../../../store/axios-instance';

import config from '../../../store/firebaseConfig';
import  './Dashboard.scss';
import Customers from './customers';


const Dashboard = (props) => {

    const [ selectedFile, setSelectedFile ] = useState();

    const fileSelectedHandler = (event) => {
        console.log('fileSelectedHandler', event.target.files[0]);
        setSelectedFile(event.target.files[0]);
    };
    
   const fileUploadHandler = () => {
        console.log('fileUploadHandler');
        const fd = new FormData();
        const fileName = new Date() + '_' + selectedFile.name;
        fd.append('image', selectedFile, fileName);
        axios.post('https://us-central1-kaefer-logistik.cloudfunctions.net/uploadFile', fd, {
            onUploadProgress:  progressEvent => {
                console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) +  '%');
            }
        }).
        then(res => {
                console.log('hier is respons', res);
            });
    
    };

   const logOut = () => {
       config.auth().signOut();
   };

    const images = [];
        let infos = [];
    
        for (let img in props.dashboard_img) {
            images.push(
                {
                    key: img,
                    image: props.dashboard_img[img]
                }
            )
        }
    
        for (let info in props.dashboard_text) {
            infos.push(
                {
                    key: info,
                    info_text: props.dashboard_text[info]
                }
            )
        }
    
        const infoTextOutput = infos.map(info => {
            return <div
                key={info.key}>
                <p>Key: {info.key}</p>
                <p>Bild: {info.info_text}</p>
                <hr/>
            </div>
        });
    
        const imagesOutput = images.map(img => {
            return <
                div
                key={img.key}>
                <p>Key: {img.key}</p>
                <p>Bild: {img.image}</p>
                <hr/>
                <hr/>
                <br/>
            </div>
        });

        let number1 = 10;
        let number2 =20;

        let msg = `hier is number:  ${number1 + number2 }`;

        let title = function(){
            return "Blum Leo";
        };

        let link = ` <a href=""> ${title()} </a>`;

        const adults = ['John', 'Ole', 'Adem'];
        const kids = ['Marina', 'Leo'];
        const people = ['Erik','Ella', ...kids, ...adults];

    let sendData=[];
        const myFunction = function(name, vname,email, password){
            console.log('==Daten==', name,vname ,email, password);

            sendData = [name, email, password] ;
        };
        const someData = ['Ella','Blum', 'Ella@web.de','secret1' ];
        myFunction(...someData);
        //myFunction.apply(null, someData);


        console.log(link);
        console.log(kids);
        console.log('===========');
        console.log(people);



        const cars = [
            {brand: 'Audi', door: 2},
            {brand: 'Toyota', door: 4}
        ];

        const myCars = [
            {brand: 'Honda', door: 2},
            {brand: 'Porsche', door: 3}

        ];

        cars.push(...myCars);

        console.log(cars);
        console.log('============');

        var animals = {
          name: 'Tiger',
            age(){
                console.log('Animals is 2 age old')
            },
            color(){
                console.log('Animals has orange color')
            }

        };

        console.log(animals.age());

        const fruit = {
          color: 'Yellow',
          name: ['Orange', 'Ananas', 'Lemon'],
          displayFruit () {

            /**  this.name.forEach(function(item){
                  let string = 'this fruit is:  ' + item + 'and hast ' + this.color + '  color';
                  console.log('===== my Fruit ===',string);
              }.bind(this))
             **/
            // es ist der selbe mit bind(this) - this wird in andren Scorp geschrieben
            //const _this  = this;
              this.name.forEach(item => {
                  let string = 'this fruit is:  ' + item + 'and hast ' + this.color + '  color';
                  console.log('===== my Fruit ===',string);
              })

           }
        };

        fruit.displayFruit();

        //###########

       const [bmw, ,ford] = ['BMW', 'AUDI', 'Ford','Honda','Ferrari'];
       console.log('Hier sind meine Autos:: ', bmw, ford);

        const person = {
          name: 'Leo',
          age: 30
        };
        const displayPerson = ({name, age}) => {
            return `${name} ${age}`
        };

        console.log('Hier ist einen Person:  ', displayPerson(person));

        let x = 5;

        if(x){
            console.log('==== IF vorvv ====', x);
            let x = 10;

            console.log('==== IF nach ====', x);
        }
        console.log('====  var / let ====', x);


    const onClickBox =(i)=> {
        console.log('hier ist BOX::' + i);
    };

    //var box2 = document.createElement('h1');
    //document.getElementsByTagName('article')[0].appendChild(box2);

    let box = [];
        for(let i=0; i<10; i++) {
             box.push(<div key={i} id={i} onClick={onClickBox(i)}></div>);

        }

    const turnOnCompute = ()  => {
        return new Promise(function (resolve, reject) {
            let isComlete = true;

            if(isComlete) {
                resolve('This is Computer');
            } else {
                reject('This is NOT Computer' );
            }

        });
    };
    const turnBrowser = (msg) => {
        return new Promise(function (resolve, reject) {
            reject('This is Browser' + msg);

        });
    };

    turnOnCompute().then((result)=>{
        return turnBrowser(result);
    }).then((result)=> {
        console.log('We are DONE', result);
    }).catch((e)=> {
        console.log('error', e);
    });

   /** myPromise.then( (result) => {
        console.log(result);
    },(error) =>{
        console.log(error)}
        );
    console.log('hallo hier ist eine kleine Test'); **/


        return (


            <React.Fragment>
                <button onClick={ logOut }> Logout </button>
                <div>
                    {msg}
                    <br/>
                    {kids}
                    <br/>
                    {people}
                    <br/>
                    {sendData}
                </div>
                <div>
                    <h4> Bilder Hochladen</h4>
                    <input type="file" style={{display: 'none'}} onChange={fileSelectedHandler} ref={fileInput => fileInput = fileInput}/>
                    <button onClick={fileUploadHandler}>Upload</button>
                </div>
                <div>
                    <h4> Bilder</h4>
                    {imagesOutput}
                </div>
                <div>
                    <h4> Text </h4>
                    {infoTextOutput}
                </div>

                <article>
                    {box}

                </article>

                <Customers />

            </React.Fragment>
        )
};


export default Dashboard;



