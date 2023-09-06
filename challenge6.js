// Declare function with string parameter.
// Convert string to array.
// Iterate through array.
// Capitalize first letter of each word in array. (returns only capitalized first letters)
// Combine Cap letters with rest of their respective strings.
// Re-join array words.

function titleize(string) {
    var stringArr = string.split(" ");
    for (var i = 0; i < stringArr.length; i++) {
    stringArr[i] = stringArr[i][0].toUpperCase() + stringArr[i].substring(1); 
    }
        return stringArr.join(" ");
  };

console.log(titleize("I just had a tasty breakfast."));

// Prints: "I Just Had A Tasty Breakfast."