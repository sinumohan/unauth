const ChromeCookie = require('chrome-cookie');


const writeCookie = async (cookies) => {
  const CCookie = new ChromeCookie();
  return await CCookie.setCookie(cookies);
}


module.exports = writeCookie;
