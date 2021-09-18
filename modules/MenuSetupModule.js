const db = require('../core/db');
const dateFormat = require('dateformat');
var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../assets/files');
    },
    filename: (req, file, cb) => {
        console.log(file);
        var filetype = '';
        if (file.mimetype === 'image/gif') {
            filetype = 'gif';
        }
        if (file.mimetype === 'image/png') {
            filetype = 'png';
        }
        if (file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
        }
        cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});
var upload = multer({ storage: storage });

const BreakfastSave = (upload.array('file'), (req, res, next) => {
    console.log(req.file);
    if (!req.file) {
        res.status(500);
    }
    res.json({ fileUrl: 'http://localhost:3000/assets/files/' + req.file.filename });
})

const MenuSave = async (data) => {
    var mndt = await MenuImageSave(data);
    var othdt = await OtherImageSave(data);
    var secdt = await SectionImageSave(data);
    var mdt = await MonthDateSave(data);
    var dt = '';
    if (mndt && othdt && secdt && mdt){
        dt = {suc: 1, msg: "Inserted Successfully !!"};
    }else{
        dt = {suc: 0, msg: "Something Went Wrong"};
    }
    return new Promise((resolve, reject) => {
        resolve(dt)
    })
}

const MenuImageSave = (data) => {
    var datetime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    var sql = `INSERT INTO td_other_image (restaurant_id, menu_id, active_flag, cover_page_url, top_img_url, created_by, created_dt) VALUES
    ("${data.restaurant_id}", "${data.menu_id}", "${data.break_check}", "${data.coverurl}", "${data.topurl}", "${data.restaurant_id}", "${datetime}")`;
    return new Promise((resolve, reject) => {
        db.query(sql, (err, lastId) => {
            if (err) {
                console.log(err);
                data = false;
            } else {
                data = true;
            }
        })
        resolve(data)
    })
}

const OtherImageSave = (data) => {
    var datetime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    var sql = `INSERT INTO td_menu_image (restaurant_id, menu_id, active_flag, menu_url, created_by, created_dt) VALUES 
    ("${data.restaurant_id}", "${data.menu_id}", "${data.break_check}", "${data.MenuUrl}", "${data.restaurant_id}", "${datetime}")`;
    return new Promise((resolve, reject) => {
        db.query(sql, (err, lastId) => {
            if (err) {
                console.log(err);
                data = false;
            } else {
                data = true;
            }
        })
        resolve(data)
    })
}

const SectionImageSave = (data) => {
    var datetime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    var sql = `INSERT INTO td_section_image_request (restaurant_id, menu_id, active_flag, sec_url, created_by, created_dt) VALUES 
    ("${data.restaurant_id}", "${data.menu_id}", "${data.break_check}", "${data.SectionUrl}", "${data.restaurant_id}", "${datetime}")`;
    return new Promise((resolve, reject) => {
        db.query(sql, (err, lastId) => {
            if (err) {
                console.log(err);
                data = false;
            } else {
                data = true;
            }
        })
        resolve(data)
    })
}

const MonthDateSave = (data) => {
    
    return new Promise((resolve, reject) => {
        var datetime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        data.month_day.forEach(d => {
            if(d.dt > 0){
                var sql = `INSERT INTO td_date_time (restaurant_id, menu_id, active_flag, month_day, start_time, end_time, created_by, created_dt) VALUES 
                    ("${data.restaurant_id}", "${data.menu_id}", "${data.break_check}", "${d.dt}", "${data.start_time}", "${data.end_time}", "${data.restaurant_id}", "${datetime}")`;
                db.query(sql, (err, lastId) => {
                    if(err){
                        console.log(err);
                        data = false;
                    }else{
                        data = true;
                    }
                })
            }
        })
        resolve(data);       
    })
}

const LogoSave = (data) => {
    var datetime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    var sql = `INSERT INTO td_logo (restaurant_id, logo_url, created_by, created_dt) VALUES 
    ("${data.restaurant_id}", "${data.logo}", "${data.restaurant_id}", "${datetime}")`;
    return new Promise((resolve, reject) => {
        db.query(sql, (err, lastId) => {
            if (err) {
                console.log(err);
                data = {suc: 0, msg: JSON.stringify(err)};
            } else {
                data = {suc: 1, msg: "Inserted Successfully !!"};
            }
            resolve(data)
        })
    })
}

const AboutUsSave = (data) => {
    var datetime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    var sql = `INSERT INTO td_about (restaurant_id, about_us, created_by, created_dt) VALUES 
    ("${data.restaurant_id}", "${data.aboutus}", "${data.restaurant_id}", "${datetime}")`;
    return new Promise((resolve, reject) => {
        db.query(sql, (err, lastId) => {
            if (err) {
                console.log(err);
                data = {suc: 0, msg: JSON.stringify(err)};
            } else {
                data = {suc: 1, msg: "Inserted Successfully !!"};
            }
            resolve(data)
        })
    })
}

const NoticeSave = (data) => {
    var datetime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    var sql = `INSERT INTO td_menu_notice (restaurant_id, menu_id, notice_flag, position_id, header_title, font_color, back_color, notice_content, created_by, created_dt) VALUES 
    ("${data.restaurant_id}", "${data.menu}", "${data.notice_flag}", "${data.position}", "${data.headertitle}", "${data.fontcolor}", "${data.back_color}", "${data.notice}", "${data.restaurant_id}", "${datetime}")`;
    
    return new Promise((resolve, reject) => {
        db.query(sql, (err, lastId) => {
            if (err) {
                console.log(err);
                data = {suc: 0, msg: JSON.stringify(err)};
            } else {
                data = {suc: 1, msg: "Inserted Successfully !!"};
            }
            resolve(data)
        })
    })
}

module.exports = { BreakfastSave, MenuSave, LogoSave, AboutUsSave, NoticeSave };