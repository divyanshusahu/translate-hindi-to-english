const express = require("express");
const router = express.Router();

const googlePhonetics = require("../utils/google_phonetics");
const googleTranslate = require("../utils/google_translate");

router.get("/", async (req, res) => {
  let keyword = req.query.keyword;
  if (!keyword) {
    res.status(400).json({
      ValidationError: { keyword: "keyword is the required query param" },
    });
    return;
  }

  // phonetics
  let result;
  try {
    let phoneticsResult = await googlePhonetics(keyword);
    let translateResult = await googleTranslate(phoneticsResult);
    result = translateResult;
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message, status: error.status });
    return;
  }
  res.json({ keyword: keyword, result: result });
});

module.exports = router;
