const express = require('express')
const upload = require('express-fileupload')
const fs = require('fs');
const { MenuImageSave, SectionImageSave, OtherImageSave, MonthDateSave } = require('../modules/MenuSetupModule');
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
    console.log({ bd: req.body});

    let res_name = req.body.restaurant_name.replace(' ', '_');
    let menu_name = req.body.menu_id == 1 ? 'breakfast' : (req.body.menu_id == 2 ? 'lunch' : (req.body.menu_id == 3 ? 'dinner' : (req.body.menu_id == 4 ? 'brunch' : 'special')));
    var upload_cover_top = await UploadCover(req.files.cov_img, req.files.top_img, menu_name, res_name, req.body),
        upload_sec = await UploadSection(req.files.section_img, menu_name, res_name, req.body),
        upload_menu = await UploadMenu(req.files.menu_img, menu_name, res_name, req.body);
        // month_day_save = await MonthDateSave(req.body);
    if (upload_cover_top && upload_sec && upload_menu) {
        res.send({ suc: 1, msg: 'Success' });
    } else {
        res.send({ suc: 0, msg: 'Not Inserted' });
    }
})

const UploadCover = async (cov_img, top_img, menu_name, res_name, data) => {
    if (cov_img && top_img) {
        var cov_file = cov_img;
        var top_file = top_img;
        var filename = cov_file.name,
            top_fl_name = top_img.name,
            top_file_ext = top_fl_name.split('.')[1],
            top_file_name = "top." + top_file_ext,
            top_file_path = "uploads/" + res_name + "/" + menu_name + "/" + top_file_name;
        let file_ext = filename.split('.')[1];
        var ResIdPath = "public/uploads/" + res_name;
        var UploadsPath = ResIdPath + "/" + menu_name + "/";
        var cov_file_name = "cover." + file_ext;
        var cov_file_path = "uploads/" + res_name + "/" + menu_name + "/" + cov_file_name;

        if (!fs.existsSync(ResIdPath)) {
            fs.mkdirSync(ResIdPath);
            fs.mkdirSync(UploadsPath);
        } else {
            if (!fs.existsSync(UploadsPath)) {
                fs.mkdirSync(UploadsPath);
            }
        }
        // console.log(filename);

        cov_file.mv(UploadsPath + cov_file_name, async (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Other Image Cover Uploaded');
            }
        })

        top_file.mv(UploadsPath + top_file_name, async (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Other Image Top Uploaded');
            }
        })

        return new Promise(async (resolve, reject) => {
            if (await MenuImageSave(data, cov_file_path, top_file_path)) {
                res = true;
            } else {
                res = false
            }
            resolve(res);
        })

    }
}

const UploadSection = async (sec_img, menu_name, res_name, data) => {
    if (sec_img) {
        console.log();
        var sec_file = sec_img,
            // filename = sec_file.name,
            // file_ext = filename.split('.')[1],
            ResIdPath = "public/uploads/" + res_name,
            UploadsPath = ResIdPath + "/" + menu_name + "/";
        // file_path = "uploads/" + res_name + "/" + menu_name + "/section/" + file_name;

        if (!fs.existsSync(ResIdPath)) {
            fs.mkdirSync(ResIdPath);
            fs.mkdirSync(UploadsPath);
        } else {
            if (!fs.existsSync(UploadsPath)) {
                fs.mkdirSync(UploadsPath);
            }
        }
        if(Array.isArray(sec_img)){
            sec_file.forEach(dt => {
                var file = dt;
                var filename = file.name,
                    // file_name = filename.split('.')[0] + '_' + new Date() + '.' + filename.split('.')[1],
                    file_path = "uploads/" + res_name + "/" + menu_name + "/" + filename;
                // console.log(filename);
    
                file.mv(UploadsPath + filename, async (err) => {
                    if (err) {
                        console.log(`${filename} not uploaded`);
                    } else {
                        console.log(`Successfully ${filename} uploaded`);
                        await SectionImageSave(data, file_path);
                    }
                })
                return new Promise((resolve, reject) => {
                    resolve(true);
                });
            })
        }else{
            var filename = sec_file.name,
                // file_name = filename.split('.')[0] + '_' + new Date() + '.' + filename.split('.')[1],
                file_path = "uploads/" + res_name + "/" + menu_name + "/" + filename;
            // console.log(filename);

            sec_file.mv(UploadsPath + filename, async (err) => {
                if (err) {
                    console.log(`${filename} not uploaded`);
                } else {
                    console.log(`Successfully ${filename} uploaded`);
                    console.log(data);
                    await SectionImageSave(data, file_path);
                }
            })
            return new Promise((resolve, reject) => {
                resolve(true);
            });
        }
        
    }
}

const UploadMenu = async (menu_img, menu_name, res_name, data) => {
    if (menu_img) {
        var sec_file = menu_img,
            // filename = sec_file.name,
            // file_ext = filename.split('.')[1],
            ResIdPath = "public/uploads/" + res_name,
            UploadsPath = ResIdPath + "/" + menu_name + "/";
        // file_path = "uploads/" + res_name + "/" + menu_name + "/section/" + file_name;

        if (!fs.existsSync(ResIdPath)) {
            fs.mkdirSync(ResIdPath);
            fs.mkdirSync(UploadsPath);
        } else {
            if (!fs.existsSync(UploadsPath)) {
                fs.mkdirSync(UploadsPath);
            }
        }
        if(Array.isArray(sec_file)){
            sec_file.forEach(dt => {
                var file = dt;
                var filename = file.name,
                    // file_name = filename.split('.')[0] + '_' + new Date() + '.' + filename.split('.')[1],
                    file_path = "uploads/" + res_name + "/" + menu_name + "/" + filename;
                // console.log(filename);
    
                file.mv(UploadsPath + filename, async (err) => {
                    if (err) {
                        console.log(`${filename} not uploaded`);
                    } else {
                        console.log(`Successfully ${filename} uploaded`);
                        await OtherImageSave(data, file_path);
                    }
                })
                return new Promise((resolve, reject) => {
                    resolve(true);
                });
            })
        }else{
            var filename = sec_file.name,
                // file_name = filename.split('.')[0] + '_' + new Date() + '.' + filename.split('.')[1],
                file_path = "uploads/" + res_name + "/" + menu_name + "/" + filename;
            // console.log(filename);

            sec_file.mv(UploadsPath + filename, async (err) => {
                if (err) {
                    console.log(`${filename} not uploaded`);
                } else {
                    console.log(`Successfully ${filename} uploaded`);
                    await OtherImageSave(data, file_path);
                }
            })
            return new Promise((resolve, reject) => {
                resolve(true);
            });
        }
        
    }
}

module.exports = { TestRouter };