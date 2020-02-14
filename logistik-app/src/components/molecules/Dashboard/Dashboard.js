import React, { useState, useEffect, useRef } from 'react';
import * as firebase from 'firebase';
import Button from "@material-ui/core/Button";

import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import config from '../../../store/firebaseConfig';
import  './Dashboard.scss';

const storage = firebase.storage();
const storageRef = storage.ref();

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));


const Dashboard = () => {
    const classes = useStyles();
    const [imageAsFile, setImageAsFile] = useState('');
    const [imagesUrl, setImagesUrl] = useState([]);
    const [successMessage, setSuccessMessage] = useState(false);
    let clickImg = 0;

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
        getImages(),
        () => {
            return () => {
                clearTimeout(timer)
            }
        }
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
                    console.log('SnapShot', snapShot);
                    let timer = setTimeout(() => setSuccessMessage(true), 1000)

                }, (err) => {
                    console.log('ERROR',err)
                }, () => {
                    console.log('imageAsFile.name', imageAsFile.name);
                    let imgName = imageAsFile.name;

                    storage.ref('images').child(imageAsFile.name).getDownloadURL()
                        .then(fireBaseUrl => {
                            setImagesUrl(prevObject => ({...prevObject, imgName: fireBaseUrl}))
                        })
                });
        }
    };

    let onClickElm = '';
    const onClickImage =(e) => {
        if(clickImg >= 2) {
            console.log(' COUNT IF');
        } else {
            console.log(' COUNT ELSE conClickEl / targetList',  onClickElm,  e.target.classList[1]);
            if(onClickElm === e.target.classList[1]) {
                console.log('Elementen sind gleich');
            } else {
                console.log('Elementen sind NOT gleich');

            }
            e.target.classList.remove('Image_Content');
            e.target.classList.add('Image_Content_OnClick');
            onClickElm = e.target.classList[0];
        }
        clickImg ++;
    };

    /**
     Logout Methode
     */
   const logOut = () => {
       config.auth().signOut();
   };

    console.log('imagesUrl Obj:: ', imagesUrl);

    const extended_one = {};
    const extended_two = {};
    let count = 0;
    // Loop through our object
    for (var prop in imagesUrl) {
        count++;
        if (imagesUrl.hasOwnProperty(prop)) {
            extended_one[prop+'_1'] = imagesUrl[prop];
            extended_two[prop+'_2'] = imagesUrl[prop];
        }
    }
    const imagesDuplicateEntries = Object.assign(extended_one, extended_two );


    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <React.Fragment>
            <div className="Dashboard">
                <h1 className="Headline">Dashboard</h1>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="Button"
                    onClick={ logOut }
                > Logout</Button>

                <div>
                    <h2 className="Subheadline"> Bilder Hochladen</h2>

                    <form action="" onSubmit={fileUploadHandler}>
                        <input type="file"   onChange={fileSelectedHandler} />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className="Button"
                        >Upload</Button>
                    </form>

                    { successMessage ?
                        <div className={classes.root}>
                            <Alert severity="success" color='success' variant='standard'>Das Bild wurde erfolgreich gespeichert!</Alert>
                        </div>
                        : null
                    }
                </div>


                <h3> Bilder </h3>
                <div className="Images_Container">
                    {
                        Object.entries(imagesDuplicateEntries).map(([imageName, imageUrl]) => (
                            <div className={"Image_Content  " + imageName} key={imageName} onClick={onClickImage}>
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



