function addKey(myObj, key) {
  if (key in myObj) {
    return "Objektas jau turi kainą!";
  } else {
    myObj.key = "50";
    return "key" in myObj;
  }
}

module.exports = addKey;
