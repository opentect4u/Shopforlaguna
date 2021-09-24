// const express = require('express')
// const upload = require('express-fileupload')
// // const busboyBodyParser = require('busboy-body-parser')
// const bodyparser = require('body-parser')
// const cors = require('cors');
// const fs = require('fs')
// const TestRouter = express.Router();
// const app = express();

// app.use(cors())
// app.use(upload())
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended: true}))
// // app.use(busboyBodyParser({ multi: true }));

// var dir = 'public';
// var subDir = "public/uploads";
// app.use(express.static('public'));

// if (!fs.existsSync(dir)) {
//     fs.mkdirSync(dir);

//     fs.mkdirSync(subDir);
// }

// TestRouter.post('/testing', (req, res) => {
//     console.log({fi: req.files, dt: req.body, re: req});
// })

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
    console.log({fi: req.files, dt: req.body, re: req});
})

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
                    // var sql = `INSERT INTO test (url, image) VALUES ("${UploadsPath}", "lunch/${filename}")`;
                    // db.query(sql, (err, lastId) => {
                    //     if (err) {
                    //         console.log(err);
                    //     } else {
                    //         console.log(filename + ' Uploader Success');
                    //     }
                    // })
                    // res.send("File Uploaded")
                }
            })
        })
    }
}

module.exports = {TestRouter};