const express = require('express')
const upload = require('express-fileupload')
const fs = require('fs')
const TestRouter = express.Router();
// const db = require('./db')

TestRouter.use(upload());

var dir = 'public';
var subDir = "public/uploads";

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);

    fs.mkdirSync(subDir);
}

TestRouter.post('/testing', async (req, res) => {
    // await uploadFile(req.files.files, req.body.ac_id);
    let res_name = req.body.restaurant_name.replace(' ', '_');
    let menu_name = req.body.menu_id == 1 ? 'breakfast' : (req.body.menu_id == 2 ? 'lunch' : (req.body.menu_id == 3 ? 'dinner' : (req.body.menu_id == 4 ? 'brunch' : 'special')));
    await UploadCover(req.files.cov_img, menu_name, res_name)
    console.log({ fi: req.files, dt: req.body, re: req });
})

const UploadCover = (cov_img, menu_name, res_name) => {
    if (cov_img) {
        var cov_file = cov_img;
        var filename = cov_file.name;
        let file_ext = filename.split('.')[1];
        var ResIdPath = "public/uploads/" + res_name;
        var UploadsPath = ResIdPath + "/" + menu_name + "/";
        var cov_file_name = "cover." + file_ext;
        var cov_file_path = "uploads/" + res_name + "/" + menu_name + "/" + "cover." + file_ext;

        if (!fs.existsSync(ResIdPath)) {
            fs.mkdirSync(ResIdPath);
            fs.mkdirSync(UploadsPath);
        } else {
            if (!fs.existsSync(UploadsPath)) {
                fs.mkdirSync(UploadsPath);
            }
        }
        // console.log(filename);

        cov_file.mv(UploadsPath + cov_file_name, (err) => {
            if (err) {
                // res.send(err)
            } else {
                var sql = `INSERT INTO test (url, image) VALUES ("${UploadsPath}", "TopImage/${filename}")`;
                db.query(sql, (err, lastId) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(filename + ' Uploader Success');
                    }
                })
                // res.send("File Uploaded")
            }
        })
    }
}

const uploadFile = (files, name) => {
    if (files) {
        var ResIdPath = "public/uploads/" + name;
        var UploadsPath = "public/uploads/" + name + "/breakfast/";

        if (!fs.existsSync(ResIdPath)) {
            fs.mkdirSync(ResIdPath);
            fs.mkdirSync(UploadsPath);
        } else {
            if (!fs.existsSync(UploadsPath)) {
                fs.mkdirSync(UploadsPath);
            }
        }
        files.forEach(dt => {
            var file = dt;
            var filename = file.name
            // console.log(filename);

            file.mv(UploadsPath + filename, (err) => {
                if (err) {
                    // res.send(err)
                } else {
                }
            })
        })
    }
}

module.exports = { TestRouter };