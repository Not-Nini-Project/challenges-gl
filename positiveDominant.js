function isPositiveDominant(array) {
  let positiveCount = 0;
  let negativeCount = 0;

  let positiveRep = [];
  let negativeRep = [];

  array.forEach((number) => {
    if (number > 0 && !positiveRep.includes(number)) {
      positiveCount++;
      positiveRep.push(number);
    } else if (number < 0 && !negativeRep.includes(number)) {
      negativeCount++;
      negativeRep.push(number);
    }
  });

  return positiveCount > negativeCount;
}
