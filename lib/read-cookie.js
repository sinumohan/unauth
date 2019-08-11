const ChromeCookie = require('chrome-cookie');


const readCookie = async (domain) => {
  const CCookie = new ChromeCookie();
  return await CCookie.getCookie(domain);
}


module.exports = readCookie;
