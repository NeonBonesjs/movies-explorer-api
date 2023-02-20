const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const userRouter = require('./users');
const movieRouter = require('./movies');
const { login, createUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const NotFoundError = require('../error/NotFoundError');

router.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30).required(),
  }),
}), createUser);

router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);

router.use(auth);

router.use('/movies', movieRouter);
router.use('/users', userRouter);

router.use('*', (req, res, next) => {
  next(new NotFoundError('Указан некорректный путь'));
});

module.exports = router;
