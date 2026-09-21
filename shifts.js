function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  let pay;
  if (hours > 8) {
    pay = 8 * rate + (hours - 8) * rate * 2.0;
  } else {
    pay = hours * rate;
  }
  return Math.floor(pay);
}   

module.exports = { isValidShift, calculatePay };
