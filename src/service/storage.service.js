// // SDK initialization
const mongoose =require('mongoose')

var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINTS
});


function uploadFile(file){

    return new  Promise((resolve,reject)=>{
        imagekit.upload({
            file:file.buffer,
            fileName:(new mongoose.Types.ObjectId().toString()),
            folder:"songs"
        }, (error,result)=>{
        if(error){
            reject(error)
        }else{
            resolve(result)
        }})

    }
) 
}

module.exports = uploadFile;


// var ImageKit = require("imagekit");
// const mongoose = require("mongoose");

// var imagekit = new ImageKit({
//     publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
//     privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
//     urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINTS
// });

// function uploadFile(file) {
//     return new Promise((resolve, reject) => {
//         imagekit.upload(
//             {
//                 file: file.buffer, 
//                 fileName: new mongoose.Types.ObjectId().toString(),
//                 folder: "songs"
//             },
//             (error, result) => {
//                 if (error) {
//                     console.log("ImageKit Upload Error:", error);
//                     return reject(error);
//                 }
//                 return resolve(result);
//             }
//         );
//     });
// }

// module.exports = uploadFile;
