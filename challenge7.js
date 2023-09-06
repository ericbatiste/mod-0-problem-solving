// Declare function that takes two parameters, one for marrital status and one for annual income.
// Establish a control flow based on those parameters.

function taxCalculater(married, annual) {
    
    switch (married) {
      case true:      
      
        if (annual > 647850) {
          return `You will pay ${annual * .37} in income tax this year.`
      } else if (annual > 431900) {
          return `You will pay ${annual * .35} in income tax this year.`
      } else if (annual > 340100) {
          return `You will pay ${annual * .32} in income tax this year.`
      } else if (annual > 178150) {
          return `You will pay ${annual * .24} in income tax this year.`
      } else if (annual > 83550) {
          return `You will pay ${annual * .22} in income tax this year.`
      } else if (annual > 20550) {
          return `You will pay ${annual * .12} in income tax this year.`
      } else {
          return `You will pay ${annual * .10} in income tax this year.`
      };
    
      case false:
        
        if (annual > 539900) {
          return `You will pay ${annual * .37} in income tax this year.`
      } else if (annual > 215950) {
          return `You will pay ${annual * .35} in income tax this year.`
      } else if (annual > 170050) {
          return `You will pay ${annual * .32} in income tax this year.`
      } else if (annual > 89075) {
          return `You will pay ${annual * .24} in income tax this year.`
      } else if (annual > 41775) {
          return `You will pay ${annual * .22} in income tax this year.`
      } else if (annual > 10275) {
          return `You will pay ${annual * .12} in income tax this year.`
      } else {
          return `You will pay ${annual * .10} in income tax this year.`
      };
        
    }
};
  
console.log(taxCalculater(true, 178152));  // Prints "You will pay 42756.47... in income tax this year."
console.log(taxCalculater(false, 178152)); // Prints "You will pay 57008.64 in income tax this year."
