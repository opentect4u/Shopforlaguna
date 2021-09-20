const express = require('express');
const { BreakfastSave, MenuSave, LogoSave, AboutUsSave, NoticeSave } = require('../modules/MenuSetupModule');
const MenuSetRouter = express.Router();

///////////////////////////////////////////////////////////////////////////////////////////
const path = require('path');

const multer = require('multer');
const fs = require('fs');

var dir = 'public';
var subDir = "public/uploads";

MenuSetRouter.use(express.static('public'));
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);

    fs.mkdirSync(subDir);
}

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // console.log({ des: req.body.ag_id, fl: file });
        cb(null, "public/uploads")
    },
    filename: (req, file, cb) => {
        // console.log({ re: req.body.ag_id });
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

var maxSize = 10 * 1024 * 1024;
var upFile = multer({ storage: storage, limits: { fileSize: maxSize } })
MenuSetRouter.post('/upload', upFile.fields([{name: 'file'}, {name: 'cov_img'}]), (req, res, next) => {
    console.log(req);
    const file = req.files
    // file.forEach((data) => {
    //     console.log(data);
    // })
    // console.log({ file });
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.status(200).send({
        statusCode: 200,
        status: 'success',
        uploadedFile: file
    })
})

MenuSetRouter.post('/mulflupload', upFile.array('mul_img'), (req, res, next) => {
    console.log(req);
    const file = req.files
    // file.forEach((data) => {
    //     console.log(data);
    // })
    // console.log({ file });
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.status(200).send({
        statusCode: 200,
        status: 'success',
        uploadedFile: file
    })
})
///////////////////////////////////////////////////////////////////////////////////////////

// var storage = multer.diskStorage({

//     // Setting directory on disk to save uploaded files
//     destination: function (req, file, cb) {
//         cb(null, '../db')
//     },

//     // Setting name of file saved
//     filename: function (req, file, cb) {
//         console.log({ f1: file });
//         cb(null, file.fieldname + '-' + Date.now() + '.' + fileExtension(file.originalname))
//     }
// })

// var upload = multer({
//     storage: storage,
//     limits: {
//         // Setting Image Size Limit to 2MBs
//         fileSize: 2000000
//     },
//     fileFilter(req, file, cb) {
//         console.log(file);
//         if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//             //Error 
//             cb(new Error('Please upload JPG and PNG images only!'))
//         }
//         //Success 
//         cb(undefined, true)
//     }
// })

// MenuSetRouter.post('/uploadfile', upload.array('file'), (req, res, next) => {
//     const file = req.body.file
//     file.forEach((data) => {
//         console.log(data);
//     })
//     console.log({ file });
//     if (!file) {
//         const error = new Error('Please upload a file')
//         error.httpStatusCode = 400
//         return next(error)
//     }
//     res.status(200).send({
//         statusCode: 200,
//         status: 'success',
//         uploadedFile: file
//     })

// }, (error, req, res, next) => {
//     res.status(400).send({
//         error: error.message
//     })
// })

////////////////////////////////////////////////////////////////

MenuSetRouter.post('/breakfast', BreakfastSave);

MenuSetRouter.post('/menu_setup', async (req, res) => {
    console.log({body: req.body[0]});
    var data = await MenuSave(req.body[0]);
    res.send(data);
})

MenuSetRouter.post('/logo', async (req, res) => {
    console.log({body: req.body});
    var data = await LogoSave(req.body);
    res.send(data);
})

MenuSetRouter.post('/aboutus', async (req, res) => {
    console.log({body: req.body});
    var data = await AboutUsSave(req.body);
    res.send(data);
})

MenuSetRouter.post('/notice', async (req, res) => {
    console.log({body: req.body});
    var data = await NoticeSave(req.body);
    res.send(data);
})


module.exports = { MenuSetRouter };