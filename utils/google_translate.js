const translate = require("@vitalets/google-translate-api");

const googleTranslate = async (keyword) => {
  let result = "";
  try {
    response = await translate(keyword, { from: "auto", to: "en" });
    result = response.text;
  } catch (error) {
    throw error.toJSON();
  }
  return result;
};

module.exports = googleTranslate;
