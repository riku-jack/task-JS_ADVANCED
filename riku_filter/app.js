const arrayNum = [11, 25, 34, 41, 50, 60, 71, 77, 89, 95, 102, 110, 112, 120];

const arrayResult = arrayNum.filter(num => {
  return num % 5 === 0
});

console.log(arrayResult);
