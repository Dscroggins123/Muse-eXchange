const router = require('express').Router();
const tutorialController = require("../../controllers/tutorialController");


router.route('/:userid')
.get(tutorialController.findUserTutorials)
.post(tutorialController.AddUserTutorials)

router.route('/video/:userid/:tutorialid')
  .delete(tutorialController.removeTutorialById)


module.exports = router;