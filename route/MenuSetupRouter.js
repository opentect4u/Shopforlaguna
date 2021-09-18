const express = require('express');
const { BreakfastSave } = require('../modules/MenuSetupModule');
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
MenuSetRouter.post('/upload', upFile.array('file[]', 5), (req, res) => {
    console.log(req);
    if (req.files) {
        req.files.forEach(file => {
            console.log(file.path);
        })
    }
})
///////////////////////////////////////////////////////////////////////////////////////////

MenuSetRouter.post('/breakfast', BreakfastSave)

module.exports = { MenuSetRouter };