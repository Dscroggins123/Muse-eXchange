const multer = require('multer');
const path = require('path');

// Multer config
module.exports = multer({
  storage: multer.diskStorage({})
})