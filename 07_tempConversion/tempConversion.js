const ftoc = function (f) {
  //ftoc [°C] = ([°F] − 32) × 5⁄9
  let c = (f - 32) * (5 / 9);
  let roundedC = Math.round(c * 10) / 10;
  // let altC = Number(c.toFixed(1));
  // console.log(altC);
  console.log(roundedC);
  return roundedC;
};

const ctof = function (c) {
  //ctof [°F] = [°C] × 9⁄5 + 32
  let f = c * (9 / 5) + 32;
  let roundedF = Math.round(f * 10) / 10;
  console.log(roundedF);
  return roundedF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
