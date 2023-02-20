const router = require('express').Router();

const { celebrate, Joi } = require('celebrate');
const { getThisUserInfo, changeUserInfo } = require('../controllers/users');

router.get('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().email(),
  }),
}), getThisUserInfo);
router.patch('/me', changeUserInfo);

module.exports = router;
