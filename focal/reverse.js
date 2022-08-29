const reversal = function(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
    console.log("Here's the backwards looping process:", newString)
  };
  console.log(`"${newString}"`);
}

reversal("lemme reverse this string for you guys");