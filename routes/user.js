const router = require('express').Router();
const {
  getMyInfo, updateMyInfo, createUser, login,
} = require('../controllers/user');
const { checkUserData, checkUserDataUpdate, checkUserCredentials } = require('../utils/validation/userDataValidation');
const auth = require('../middlewares/auth');

router.post('/signup', checkUserData, createUser);
router.post('/signin', checkUserCredentials, login);

router.get('/users/me', auth, getMyInfo);
router.patch('/users/me', auth, checkUserDataUpdate, updateMyInfo);

module.exports = router;
