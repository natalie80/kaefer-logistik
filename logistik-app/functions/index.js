const functions = require('firebase-functions');
const admin = require('firebase-admin');
const {Storage} = require('@google-cloud/storage');
const os = require('os');
const path = require('path');
const spawn = require('child-process-promise').spawn;
const cors = require('cors')({origin: true});
const Busboy = require('busboy');
const fs = require('fs');

admin.initializeApp();
//gs://kaefer-logistik.appspot.com
const projectName = "kaefer-logistik.appspot.com";
const config = {
    projectId: "kaefer-logistik",
    keyFilename: "kaefer-logistik-firebase-adminsdk-5gd28-81597b066d.json"
};

// Creates a client
const storage = new Storage(config);
//const bucket = storage.bucket(projectName);

/**
 *
 * var admin = require("firebase-admin");
 
 var serviceAccount = require("path/to/serviceAccountKey.json");
 
 admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://kaefer-logistik.firebaseio.com"
});
 */

exports.onFileChange = functions.storage.object().onFinalize(async (object) => {
    console.log("--- my object ---", object);
    
 /**  const fileBucket = object.bucket; // The Storage bucket that contains the file.
    console.log("--- my fileBucket ---", fileBucket);
    
    const filePath = object.name; // File path in the bucket.
    console.log("--- my filePath ---", filePath);
    
    const contentType = object.contentType; // File content type.
    console.log("--- my contentType ---", contentType);
    
    const metageneration = object.metageneration; // Number of times metadata has been generated. New objects have a value of 1.
    console.log("--- my metageneration ---", metageneration);
    //------------
    if(path.basename(filePath).startsWith('rename-')) {
        console.log("--- we already rename the file ---");
        return;
    }
    //------------
    const destBucket = storage.bucket(fileBucket);
    const tmpFilepath =  path.join(os.tmpdir(), path.basename(filePath) );
    const metadata = {contentType: contentType};
    console.log("--- tmpFilepath ---", tmpFilepath);
    
    destBucket.file(filePath).download({destination: tmpFilepath
    }).then(() => {
        console.log("--- spawn convert---");
        return spawn('convert', [tmpFilepath, '-resize', '500x500', tmpFilepath ]);
        
    }).then(() => {
        console.log("--- rename file---");
        
        return destBucket.upload(tmpFilepath, {
            destination: 'resized--' + path.basename(filePath),
            metadata: metadata
        })
    });
    
    **/
});


exports.uploadFile = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        
        if(req.method !== 'POST') {
            return res.status(405).json({
                message: 'Not allowed'
            });
        }
        
        const busboy = new Busboy({headers: req.headers});
        let uploadData = null;
        const tmpdir = os.tmpdir();

        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            const filepath = path.join(tmpdir, filename);
            uploadData = { file: filepath, type: mimetype };
            
            //write file to the system
            file.pipe(fs.createWriteStream(filepath));
            
        });
        
        busboy.on('finish', () => {
            const bucket = storage.bucket(projectName);
            
            bucket.upload(uploadData.file, {
                uploadType: 'media',
                metadata: {
                    metadata: {
                        contentType: uploadData.type
                    }
                }
            }).then(() => {
                res.status(200).json({
                    message: 'It worked'
                })
            }).catch(err => {
                res.status(500).json({
                    error: err
                });
                
            });
        });
        
        busboy.end(req.rawBody);
    });
});
