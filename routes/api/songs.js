const router = require('express').Router();
const songController = require("../../controllers/songController");
const cloudinary = require('../../utils/cloudinary');
const upload = require('../../utils/multer');

// router
//   .route("/")
//   .get(songController.findAll);

router.route('/:userid')
.get(songController.findUserSongs)
.post(songController.AddUserSongs)



router.route('/genre/:genre')
.get(songController.findSongsGenre)


router.route('/price/:id')
.get(songController.findSongsPrice)
.put(songController.updateSongPrice)

router.route('/title/:title')
.get(songController.findSongsTitle)
.put(songController.updateSongTitle)

router.route('/author/:author')
.get(songController.findSongsAuthor)
.put(songController.updateSongAuthor)

router.route('/genre/:genre')
.get(songController.findSongsGenre)
.put(songController.updateSongTitle)


// router.route(`/:songid/:userid`)
// .post(songController.AddPurchasedSongs)
router.route('/ide/:songid')
  .get(songController.findSongById)

// router.post('/audio/cloudinary', upload.single('raw'), async(req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path, {resource_type: 'raw'});
//     res.json(result);
//   } catch (err) {
//     console.log(err);
//   }
// })

// router.post('/image/cloudinary', upload.single('image'), async(req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path);
//     res.json(result);
//   } catch (err) {
//     console.log(err);
//   }
// })

router.route('/audio/:userid/:songid')
  .delete(songController.removeSongById)


router.delete('/audio/cloudinary/delete', async(req, res) => {
  try {
    console.log(req.body.publicid)
    await cloudinary.uploader.destroy(req.body.publicid, {resource_type: 'raw'});
    res.json({hello: 'world'})
  } catch (err) {
    console.log(err);
  }
})

// router.delete('/image/cloudinary/delete', async(req, res) => {
//   try {
//     console.log(req.body.publicid)
//     await cloudinary.uploader.destroy(req.body.publicid);
//     res.json({hello: 'world'})
//   } catch (err) {
//     console.log(err);
//   }
// })



module.exports = router;
