const router = require('express').Router();
const userController = require('../../controllers/userControllers');
const user = require('../../models/user');

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

// router.route('/profile/profilePic/:userid')
//   .put(userController.updateProfilePic)

 
// router.route('/profile/firstName/:userid')
//   .put(userController.updateFirstName);

// router.route('/profile/lastName/:userid')
//   .put(userController.updateLastName);



module.exports = router;