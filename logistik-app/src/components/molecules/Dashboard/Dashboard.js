import React, {Component} from 'react';
import axios from '../../../store/axios-instance'

import styles from './Dashboard.scss';



class Dashboard extends  Component {
    state = {
        selectedFile: null
    };
    
    fileSelectedHandler = (event) => {
        console.log('fileSelectedHandler', event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0]
        })
    };
    
    fileUploadHandler = () => {
        console.log('fileUploadHandler');
        const fd = new FormData();
        const fileName = new Date() + '_' + this.state.selectedFile.name
        fd.append('image', this.state.selectedFile, fileName);
        axios.post('https://us-central1-kaefer-logistik.cloudfunctions.net/uploadFile', fd, {
            onUploadProgress:  progressEvent => {
                console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) +  '%');
            }
        }).
        then(res => {
                console.log('hier is respons', res);
            });
    
    };
    
    
    render() {
        const images = [];
        let infos = [];
    
        for (let img in this.props.dashboard_img) {
            images.push(
                {
                    key: img,
                    image: this.props.dashboard_img[img]
                }
            )
        }
    
        for (let info in this.props.dashboard_text) {
            infos.push(
                {
                    key: info,
                    info_text: this.props.dashboard_text[info]
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
            return <div
                key={img.key}>
                <p>Key: {img.key}</p>
                <p>Bild: {img.image}</p>
                <hr/>
            </div>
        });
    
        return (
            <React.Fragment>
                <div>
                    <h4> Bilder Hochladen</h4>
                    <input type="file" style={{display: 'none'}} onChange={this.fileSelectedHandler} ref={fileInput => this.fileInput = fileInput}/>
                    <button onClick={() => this.fileInput.click()}>Pick File</button>
                    <button onClick={this.fileUploadHandler}>Upload</button>
                </div>
                <div>
                    <h4> Bilder</h4>
                    {imagesOutput}
                </div>
                <div>
                    <h4> Text </h4>
                    {infoTextOutput}
                </div>
            </React.Fragment>
    
        )
    }
    
  
};


export default Dashboard;



