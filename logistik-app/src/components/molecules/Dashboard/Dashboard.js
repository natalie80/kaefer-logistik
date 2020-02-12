import React, { useState, useEffect, useRef } from 'react';
/**import axios from '../../../store/axios-instance';**/
import * as firebase from 'firebase';

import config from '../../../store/firebaseConfig';
import  './Dashboard.scss';

const storage = firebase.storage();
const storageRef = storage.ref();

const Dashboard = () => {
    const [imageAsFile, setImageAsFile] = useState('');
    const [ imagesUrl, setImagesUrl ] = useState([]);

    /**
     * Show Images in the page
     */
    const getImages = () => {
        storageRef.child('images/').listAll().then((result) => {
            result.items.forEach((imgRef) => {

                let urlSplit = imgRef.toString().split("/");
                let imgName = urlSplit[urlSplit.length - 1].split('.')[0];

                imgRef.getDownloadURL().then((url) => {
                    setImagesUrl(prevState => ({
                        ...prevState,
                        [imgName]: url,
                    }));
                });
            })
        });
    };

    useEffect (() => {
        getImages();
    }, []);


    /**
     * Image was selected
     * @param event
     */
    const fileSelectedHandler = (event) => {
        console.log('fileSelectedHandler', event.target.files[0]);
        const image = event.target.files[0];
        setImageAsFile(imgFile => (image));
    };

    /**
     * File Upload
     */
    const fileUploadHandler = (e) => {
        e.preventDefault();
        console.log('== start of upload ==');

        if(imageAsFile === '' ) {
            console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
        } else {
            const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);

            uploadTask.on('state_changed',
                (snapShot) => {
                    //takes a snap shot of the process as it is happening
                    console.log('SnapShot', snapShot)
                }, (err) => {
                    console.log('ERROR',err)
                }, () => {
                    // gets the functions from storage refences the image storage in firebase by the children
                    // gets the download url then sets the image from firebase as the value for the imgUrl key:
                    console.log('imageAsFile.name', imageAsFile.name);
                    let imgName = imageAsFile.name;

                    storage.ref('images').child(imageAsFile.name).getDownloadURL()
                        .then(fireBaseUrl => {
                            setImagesUrl(prevObject => ({...prevObject, imgName: fireBaseUrl}))
                        })
                });
        }
    };

    /**
     Logout Methode
     */
   const logOut = () => {
       config.auth().signOut();
   };

    return (
        <React.Fragment>
            <div className="Dashboard">
                <button onClick={ logOut }> Logout </button>

                <div>
                    <h4> Bilder Hochladen</h4>

                    <form action="" onSubmit={fileUploadHandler}>
                        <input type="file"   onChange={fileSelectedHandler} />
                        <button>Upload</button>
                    </form>
                </div>

                <h4> Bilder </h4>
                <div className="Images_Container">
                    {
                        Object.entries(imagesUrl).map(([imageName, imageUrl]) => (
                            <div className="Image_Content" key={imageName}>
                                <img className="Image" key={imageName} src={imageUrl} alt={imageName} />
                                <p className="Image_Info">{imageName}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    )
};


export default Dashboard;



