const axios = require("axios");

const googlePhonetics = async (keyword) => {
  let params = {
    text: keyword,
    itc: "transliteration_en_hi",
  };
  let result = "";
  try {
    let response = await axios.get("https://inputtools.google.com/request", {
      params: params,
    });
    let data = response.data;
    result = data[1][0][1][0];
  } catch (error) {
    throw error.toJSON();
  }
  return result;
};

module.exports = googlePhonetics;
