const diceRolls = process.argv[2]
console.log(diceRolls)


const diceRoll = function(num) {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push(Math.floor(Math.random() * 6) + 1);
  }
  return result;
}
console.log(`We rolled ${diceRolls} dice: ${diceRoll(diceRolls).join(', ')}`)