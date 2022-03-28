const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/fotos");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.filename);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
