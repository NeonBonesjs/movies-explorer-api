const router = require('express').Router();

const { celebrate, Joi } = require('celebrate');
const { getThisUserInfo, changeUserInfo } = require('../controllers/users');

router.get('/me', getThisUserInfo);
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).required().max(30),
    email: Joi.string().required().email(),
  }),
}), changeUserInfo);

module.exports = router;
