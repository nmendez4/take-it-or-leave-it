const router = require('express').Router();

router.get("/", (req, res) => {
    res.render('upload');
})

router.post("/", (req, res) => {
    let photoUpload;
    let uploadPath;

    if(!req.files || Object.keys(req.files).length === 0){
       return res.status(400).send('No photo was uploaded')
    }
//  name of the input is photoUpload
photoUpload = req.files.photoUpload;
uploadPath = __dirname + '/upload/' + photoUpload.name;
console.log(photoUpload);

// use mv() --which is "move"-- to place file on the server
photoUpload.mv(uploadPath, function(err) {
    if(err) return res.status(500).send(err);
    res.send('Photo Uploaded!');
})
})

module.exports = router