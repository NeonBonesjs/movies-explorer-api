const CORS_WHITELIST = [
  'http://localhost:3001',
  'http://localhost:3000',
  'https://movies-neonbonesjs.nomoredomains.monster',
  'http://movies-neonbonesjs.nomoredomains.monster',
];

const corsOption = {
  credentials: true,
  origin: function checkCorsList(origin, callback) {
    if (CORS_WHITELIST.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

module.exports = corsOption;
