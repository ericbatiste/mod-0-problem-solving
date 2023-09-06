// Define array of travel destinations.
// Alphebetize array.
// Iterate through destinations array.
// Interpolate each destination into a sentence.
// Print each sentence.

var destinations = ["Bankok", "Cape Town", "Tulum", "Amalfi", "Squamish"];

for (var i = 0; i < destinations.length; i++) {
    destinations.sort();
    console.log(`Take me to ${destinations[i]}!`);
};

// Prints: 
// Take me to Amalfi! 
// Take me to Bankok!
// Take me to Cape Town!
// Take me to Squamish!
// Take me to Tulum!