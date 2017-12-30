var express = require('express');
var multer = require('multer');
var router = express.Router();


var Storage = multer.diskStorage({
     destination: function(req, file, callback) {
         callback(null, "./Images");
     },
     filename: function(req, file, callback) {
         callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
     }
 });

//Field name and max count
var upload = multer({storage: Storage}).array("imgUploader", 3); 

 router.get("/", function(req, res) {
     res.sendFile(__dirname + "/index.html");
 });

 router.post("/api/Upload", function(req, res) {

 	if(req.files){
      console.log(req.files);
 	}
     upload(req, res, function(err) {
         if (err) {
             return res.end("Something went wrong!");
         }
         return res.send("File uploaded sucessfully!.\n"+ req.files);
     });
 });
 router.post('/upload', multer({ dest: __dirname+ './Images/'}).single('upl'), 
 	function(req,res){
	console.log(req.body); //form fields
	/* example output:
	{ title: 'abc' }
	 */
	console.log(req.file); //form files 
	res.send(req.file);
});

//==============================
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/Images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage });

var upload = multer().single('avatar')

router.post('/profile', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
      return res.json({"err":"Something went wrong"});
    }
   console.log(req.files);
    // Everything went fine
  })
})
//=======================
var storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, './Images')
	},
	filename: function(req, file, callback) {
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
});

router.post('/api/file', function(req, res) {
	var upload = multer({
		storage: storage,
		fileFilter: function(req, file, callback) {
			var ext = path.extname(file.originalname);
			console.log(req.file);
			if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
				return callback(res.end('Only images are allowed'), null)
			}
			callback(null, true)
		}
	}).single('userFile');
	upload(req, res, function(err) {
		res.end('File is uploaded')

	})
})





 module.exports= router;