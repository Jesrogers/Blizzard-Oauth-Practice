const fetch = require('node-fetch');
const baseUrl = 'https://us.battle.net/oauth/token';
const authString = Buffer.from(
  `${process.env.BNET_ID}:${process.env.BNET_SECRET}`
).toString('base64');

const getToken = async () => {
  const token = await fetch(`${baseUrl}`, {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers: {
      Authorization: `Basic ${authString}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return token;
};

module.exports = getToken;
