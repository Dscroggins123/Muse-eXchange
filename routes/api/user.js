const router = require('express').Router();
const userController = require('../../controllers/userControllers');
const user = require('../../models/user');
const cloudinary = require('../../utils/cloudinary');
const upload = require('../../utils/multer');

router.route('/')
  .get(userController.findAll)
  .post(userController.addNewUser);

router.route('/:id')
  .get(userController.findById);

// Get user by profession
router.route('/profession/:profession')
  .get(userController.findAllByProfession);

/** ===== User Profile ===== */

router.route('/username/:username')
  .get(userController.findByUsername)

router.route('/profile/:userid/:field')
  .get(userController.getProfile)
  .put(userController.updateProfile)

/** ---- Profile Instruments ---- */
router.route('/profile/instruments/:userid/:field')
  .put(userController.updateInstrument)

/** ---- Profile Links ---- */
router.route('/profile/links/:userid/:field')
  .put(userController.updateLinks)
  
// router.route('/profile/firstName/:userid')
//   .put(userController.updateFirstName);

// router.route('/profile/lastName/:userid')
//   .put(userController.updateLastName);


router.route('/register')
.post(userController.addNewUser)

router.route(`/purchasedsong/:songid/:userid`)
.get(userController.AddPurchasedSongs)

router.route(`/purchasedtutorial/:tutorialid/:userid`)
.get(userController.AddPurchasedTutorials)

router.route('/instruments/guitar')
.get(userController.findByInstrumentGuitar)

router.route('/instruments/drum')
.get(userController.findByInstrumentDrum)

router.route('/instruments/bass')
.get(userController.findByInstrumentBass)

router.route('/instruments/keyboard')
.get(userController.findByInstrumentKeyboard)

router.route('/instruments/beats')
.get(userController.findByInstrumentBeats)

router.route('/instruments/trumpet')
.get(userController.findByInstrumentTrumpet)

router.route('/instruments/saxophone')
.get(userController.findByInstrumentSaxophone)

router.route('/instruments/violin')
.get(userController.findByInstrumentViolin)

router.route('/instruments/cello')
.get(userController.findByInstrumentCello)

router.route('/image/cloudinary')
  .post(function(req, res) {
    if (req.body.publicid) {
      try {
        cloudinary.uploader.destroy(req.body.publicid);
        res.json({hello: 'world'})
      } catch (err) {
        console.log(err);
      }
    }
})

module.exports = router;