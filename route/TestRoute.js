const express = require('express')
const upload = require('express-fileupload')
const fs = require('fs');
const Readable = require('stream').Readable;
const db = require('../core/db');
const { MenuImageSave, SectionImageSave, OtherImageSave, MonthDateSave, LogoSave, SectionSave } = require('../modules/MenuSetupModule');
const { SaveSpecialMenuImg, SpecialMonthDateSave } = require('../modules/SpecialModule');
const TestRouter = express.Router();

TestRouter.use(upload());

TestRouter.post('/testing', async (req, res) => {
    // console.log({ bd: req.body, file: req.files, req: req });
    // console.log(req.body.cov_img);
    var cov_file_name = '',
        top_img_name = '',
        data = req.body;
    var cov_file = req.files ? (req.files.cov_img ? req.files.cov_img : null) : null;
    var top_file = req.files ? (req.files.top_img ? req.files.top_img : null) : null;
    if (cov_file) {
        var cov_file_name = data.restaurant_id + '_' + data.menu_id + '_cover_' + cov_file.name;

        cov_file.mv('Uploads/' + cov_file_name, async (err) => {
            if (err) {
                console.log(`${cov_file_name} not uploaded`);
            } else {
                console.log(`Successfully ${cov_file_name} uploaded`);
                // await SectionImageSave(data, filename);
            }
        })
    }
    if (top_file) {
        var top_img_name = data.restaurant_id + '_' + data.menu_id + '_top_' + top_file.name;

        top_file.mv('Uploads/' + top_img_name, async (err) => {
            if (err) {
                console.log(`${top_img_name} not uploaded`);
            } else {
                console.log(`Successfully ${top_img_name} uploaded`);
                // await SectionImageSave(data, filename);
            }
        })
    }

    var dt = await MenuImageSave(req.body, cov_file_name, top_img_name);
    var upload_menu = await UploadMenu(req.files ? (req.files.menu_img ? req.files.menu_img : null) : null, req.body);
    var upload_sec = await UploadSection(req.files ? (req.files.section_img ? req.files.section_img : null) : null, req.body);
    res.send({ suc: 1, msg: 'Success' });
})

const UploadCover = async (menu_name, res_name, data) => {
    var top_file_path = '',
        cov_file_path = '';
    if (cov_img && top_img) {
        var cov_file = cov_img;
        var top_file = top_img;
        var filename = cov_file.name,
            top_fl_name = top_img.name,
            top_file_ext = top_fl_name.split('.')[1],
            top_file_name = "top." + top_file_ext;
        top_file_path = "uploads/" + top_file_name;
        let file_ext = filename.split('.')[1];
        var ResIdPath = "uploads/";
        var UploadsPath = ResIdPath + "/";
        var cov_file_name = "cover." + file_ext;
        cov_file_path = "uploads/" + cov_file_name;

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

        // return new Promise(async (resolve, reject) => {
        //     if (await MenuImageSave(data, cov_file_path, top_file_path)) {
        //         res = true;
        //     } else {
        //         res = false
        //     }
        //     resolve(res);
        // })
    }

    return new Promise(async (resolve, reject) => {
        if (await MenuImageSave(data, cov_file_path, top_file_path)) {
            res = true;
        } else {
            res = false
        }
        resolve(res);
    })
}

const UploadSection = async (sec_img, data) => {
    // console.log(sec_img);
    var file_path = '';
    if (sec_img) {
        // console.log();
        var sec_file = sec_img,
            ResIdPath = "uploads/";

        if (Array.isArray(sec_img)) {
            // console.log(sec_file.length);
            file_path = new Array();
            for (let i = 1; i <= sec_file.length; i++) {
                var filename = '';
                var file = sec_file[i - 1];
                filename = data.restaurant_id + '_' + data.menu_id + '_section_' + i + '_' + file.name;
                file_path.push({ i, filename });

                file.mv('uploads/' + filename, async (err) => {
                    if (err) {
                        console.log(`${filename} not uploaded`);
                    } else {
                        console.log(`Successfully ${filename} uploaded`);
                    }
                })
            }
            await SectionImageSave(data, file_path);
        } else {
            var filename = data.restaurant_id + '_' + data.menu_id + '_section_' + sec_file.name;

            sec_file.mv('Uploads/' + filename, async (err) => {
                if (err) {
                    console.log(`${filename} not uploaded`);
                } else {
                    console.log(`Successfully ${filename} uploaded`);
                    await SectionImageSave(data, filename);
                }
            })
        }
    } else {
        await SectionImageSave(data, file_path);
    }
}

const UploadMenu = async (menu_img, data) => {
    var file_path = '';
    if (menu_img) {
        var sec_file = menu_img,
            ResIdPath = "uploads/";

        if (Array.isArray(sec_file)) {
            // console.log(sec_file.length);
            let j = 0;
            file_path = new Array();
            for (let i = 1; i <= sec_file.length; i++) {
                var filename = '';
                var file = sec_file[i - 1];
                filename = data.restaurant_id + '_' + data.menu_id + '_menu_' + i + '_' + file.name;
                file_path.push({ i, filename });

                file.mv('uploads/' + filename, async (err) => {
                    if (err) {
                        console.log(`${filename} not uploaded`);
                    } else {
                        console.log(`Successfully ${filename} uploaded`);
                    }
                })
            }
            await OtherImageSave(data, file_path);
            // console.log(Array.isArray(file_path));
        } else {
            // console.log({ else: Array.isArray(file_path) });
            var filename = data.restaurant_id + '_' + data.menu_id + '_menu_' + sec_file.name;

            sec_file.mv('Uploads/' + filename, async (err) => {
                if (err) {
                    console.log(`${filename} not uploaded`);
                } else {
                    console.log(`Successfully ${filename} uploaded`);
                    await OtherImageSave(data, filename);
                }
            })
        }

    } else {
        // console.log("Null File Selected");
        await OtherImageSave(data, file_path)
    }
}

TestRouter.post('/logo', async (req, res) => {
    // console.log({ body: req.body, fl: req.files, req });
    // let res_name = req.body.restaurant_name.replace(' ', '_');
    // var data = await UploadLogo(req.files.logo_img, res_name, req.body);
    var data = await UploadLogo(req.body.logo_img, req.body);
    // console.log({logo_img: req.body.logo_img, body: req.body, req});
    res.send({ suc: 1, msg: 'Success' });
})

const UploadLogo = async (logo_img, data) => {
    var dt = '',
        file_path = '';
    if (logo_img) {
        var buffer = logo_img;
        // var dt = buffer.split(';');
        // var ext = dt[0].split('/')[1];
        var filename = data.restaurant_id + '_logo_' + data.filename;

        // console.log(filename);
        var buffer_dt = buffer.replace(/^data:image\/png;base64,/, "");
        buffer_dt += buffer_dt.replace('+', ' ');
        let binaer_dt = new Buffer(buffer_dt, 'base64').toString('binary');
        fs.writeFile("uploads/" + filename, binaer_dt, "binary", async (err) => {
            if (err) console.log(err); // writes out file without error, but it's not a valid image
            else {
                await LogoSave(data, filename);
            }
        });
        // file.mv("uploads/" + filename, async (err) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log('Logo Uploaded ' + filename);
        //         await LogoSave(data, filename);
        //     }
        // })

    } else {
        await LogoSave(data, file_path);
    }
}

TestRouter.post('/cover_save', async (req, res) => {
    var img_type = 'cover';
    var dt = await CoverImgUpload(req.files.cov_img, img_type, req.body);
    res.send(dt);
})

const CoverImgUpload = async (files, img_type, data) => {
    var filename = '',
        dt = '';
    if (files) {
        var filename = data.restaurant_id + '_' + data.menu_id + '_' + img_type + '_' + files.name;
        return new Promise(async (resolve, reject) => {
            files.mv('uploads/' + filename, async (err) => {
                if (err) {
                    console.log(`${filename} not uploaded`);
                } else {
                    console.log(`Successfully ${filename} uploaded`);
                    dt = await UpdateOtherImg(`cover_page_url = "${data.cov_url}", cover_page_img = "${filename}"`, `id = "${data.id}" AND restaurant_id = "${data.restaurant_id}"`, 'td_other_image');
                }
                resolve(dt);
            })
        })
    } else {
        return new Promise(async (resolve, reject) => {
            dt = await UpdateOtherImg(`cover_page_url = "${data.cov_url}", cover_page_img = "${filename}"`, `id = "${data.id}" AND restaurant_id = "${data.restaurant_id}"`, 'td_other_image');
            resolve(dt);
        })
    }
}

TestRouter.post('/top_save', async (req, res) => {
    var img_type = 'top';
    var dt = await TopImgUpload(req.files.top_img, img_type, req.body);
    res.send(dt);
})

const TopImgUpload = async (files, img_type, data) => {
    var filename = '',
        dt = '';
    if (files) {
        var filename = data.restaurant_id + '_' + data.menu_id + '_' + img_type + '_' + files.name;
        return new Promise(async (resolve, reject) => {
            files.mv('uploads/' + filename, async (err) => {
                if (err) {
                    console.log(`${filename} not uploaded`);
                } else {
                    console.log(`Successfully ${filename} uploaded`);
                    dt = await UpdateOtherImg(`top_img_url = "${data.top_url}", top_image_img = "${filename}"`, `id = "${data.id}" AND restaurant_id = "${data.restaurant_id}"`, 'td_other_image');
                    resolve(dt);
                }
            })
        })
    } else {
        return new Promise(async (resolve, reject) => {
            dt = await UpdateOtherImg(`top_img_url = "${data.top_url}", top_image_img = "${filename}"`, `id = "${data.id}" AND restaurant_id = "${data.restaurant_id}"`, 'td_other_image');
            resolve(dt);
        })
    }
}

TestRouter.post('/section', async (req, res) => {
    var sec_name = req.body.sec_name.replace(' ', '_');
    var img_type = 'section' + sec_name;
    var dt = await UploadSectionImg(req.files ? req.files.sec_img : null, img_type, req.body);
    res.send(dt);
})

const UploadSectionImg = (files, img_type, data) => {
    var filename = '',
        dt = '';
    if (files) {
        var filename = data.restaurant_id + '_' + data.menu_id + '_' + img_type + '_' + files.name;
        return new Promise(async (resolve, reject) => {
            files.mv('uploads/' + filename, async (err) => {
                if (err) {
                    console.log(`${filename} not uploaded`);
                } else {
                    console.log(`Successfully ${filename} uploaded`);
                    dt = await SectionSave(data, filename);
                    resolve(dt);
                }
            })
        })
    } else {
        return new Promise(async (resolve, reject) => {
            dt = await SectionSave(data, filename);
            resolve(dt);
        })
    }
}

const UpdateOtherImg = (fields, whr, table_name) => {
    var sql = `UPDATE ${table_name} SET ${fields} WHERE ${whr}`;
    var res = '';
    console.log(sql);
    return new Promise((resolve, reject) => {
        db.query(sql, (err, lastId) => {
            if (err) {
                console.log(err);
                res = { suc: 0, msg: 'Not Updated' };
            } else {
                res = { suc: 1, msg: 'Updated Successfully' };
            }
            resolve(res)
        })
    })
}

TestRouter.get('/del_menu', (req, res) => {
    var sql = `DELETE FROM td_menu_image WHERE restaurant_id = ${req.query.res_id} AND id = ${req.query.id}`;
    db.query(sql, (err, lastId) => {
        if (err) {
            console.log(err);
            res.send({ suc: 0, msg: JSON.stringify(err) });
        } else {
            res.send({ suc: 1, msg: "Deleted" });
        }
    })
})

TestRouter.get('/del_sec', (req, res) => {
    var sql = `DELETE FROM td_section_image_request WHERE restaurant_id = ${req.query.res_id} AND id = ${req.query.id}`;
    db.query(sql, (err, lastId) => {
        if (err) {
            console.log(err);
            res.send({ suc: 0, msg: JSON.stringify(err) });
        } else {
            res.send({ suc: 1, msg: "Deleted" });
        }
    })
})

TestRouter.post('/special_save', async (req, res) => {
    console.log(req);
    var upload_special_menu = await UploadSpecialMenu(req.files ? (req.files.special_img ? req.files.special_img : null) : null, req.body);
    var data = await SpecialMonthDateSave(res.body);
    res.send('Success')
})

const UploadSpecialMenu = async (menu_img, data) => {
    var file_path = '';
    if (menu_img) {
        var sec_file = menu_img,
            ResIdPath = "uploads/";

        if (Array.isArray(sec_file)) {
            console.log(sec_file.length);
            let j = 0;
            file_path = new Array();
            for (let i = 1; i <= sec_file.length; i++) {
                var filename = '';
                var file = sec_file[i - 1];
                filename = data.restaurant_id + '_' + data.menu_id + '_special_menu_' + i + '_' + file.name;
                file_path.push({ i, filename });

                file.mv('uploads/' + filename, async (err) => {
                    if (err) {
                        console.log(`${filename} not uploaded`);
                    } else {
                        console.log(`Successfully ${filename} uploaded`);
                    }
                })
            }
            await SaveSpecialMenuImg(data, file_path);
            // console.log(Array.isArray(file_path));
        } else {
            // console.log({ else: Array.isArray(file_path) });
            var filename = data.restaurant_id + '_' + data.menu_id + '_special_menu_' + sec_file.name;

            sec_file.mv('Uploads/' + filename, async (err) => {
                if (err) {
                    console.log(`${filename} not uploaded`);
                } else {
                    console.log(`Successfully ${filename} uploaded`);
                    await SaveSpecialMenuImg(data, filename);
                }
            })
        }

    } else {
        // console.log("Null File Selected");
        await SaveSpecialMenuImg(data, file_path)
    }
}

module.exports = { TestRouter, UploadLogo };