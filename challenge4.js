// Define hobbies array.
// Itereate through array.
// Check to find elements with "-ing" ending.
// Print those elements.

var hobbies = ["cycling", "skiing", "guitar"];
hobbies.forEach((hobbie) => {
    if (hobbie.endsWith("ing") === true) {
        console.log(hobbie);
    }
});

// Prints: "cycling" "skiing"
