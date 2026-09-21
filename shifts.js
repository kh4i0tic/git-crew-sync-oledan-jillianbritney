function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  let pay;
  if (hours > 8) {
    pay = 8 * rate + (hours - 8) * rate * 1.5;
  } else {
    pay = hours * rate;
  }
  return Math.round(pay);
}   

module.exports = { isValidShift, calculatePay };
