const NodeCache = require('node-cache');
const getToken = require('./util/getToken');

const cache = new NodeCache();

(async () => {
  const response = await getToken();
  const tokenObj = await response.json();

  cache.set('token', tokenObj.access_token, tokenObj.expires_in);

  cache.on('expired', async () => {
    const newTokenRes = await getToken();
    const newTokenObj = await newTokenRes.json();

    cache.set('token', newTokenObj.access_token, newTokenObj.expires_in);
  });
})();

module.exports = cache;
