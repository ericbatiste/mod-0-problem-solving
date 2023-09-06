// Define function that accepts a string 
// Iterate through string.
// Replace "s" or "S" with "".

function removeSs(string) {
    for (var i = 0; i < string.length; i++) {
        return string.replaceAll("s", "").replaceAll("S", "");
    }
};

console.log(removeSs("Salty shores"));