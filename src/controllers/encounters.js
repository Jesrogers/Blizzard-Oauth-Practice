const cache = require('../cache');

const getEncounters = () => {
  console.log(cache.get('token'));
};

module.exports = getEncounters;
