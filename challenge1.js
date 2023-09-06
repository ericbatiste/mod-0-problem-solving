// Define array of strings.
// Iterate through strings array.
// Check length of each string === 4
// Print strings with exactly 4 characters.

var summerMonths = ["June", "July", "August", "September"];
for (var i = 0; i < summerMonths.length; i++) {
    if (summerMonths[i].length === 4) {
        console.log(summerMonths[i]);
    }
};

// Prints "June" "July"