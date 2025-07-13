function ButterFly(n) {
    // Upper portion
    const loop = Math.floor(n / 2); // Half the number of rows (excluding middle)
    let str;
  
    for (let i = 1; i <= loop; i++) {
      str = "";
  
      // Left stars
      for (let j = 1; j <= i; j++) {
        str += "* ";
      }
  
      // Spaces between stars
      for (let j = 1; j <= n - 2 * i; j++) {
        str += "  ";
      }
  
      // Right stars
      for (let k = 1; k <= i; k++) {
        str += "* ";
      }
  
      console.log(str);
    }
  
    // Middle row (full stars)
    str = "";
    for (let i = 1; i <= n; i++) {
      str += "* ";
    }
    console.log(str);
  
    // Lower portion
    let lowerRow = loop + 2; // Start counting from the row after middle
    for (let i = 1; i <= loop; i++, lowerRow++) {
      str = "";
  
      // Left stars
      for (let j = 1; j <= n - lowerRow + 1; j++) {
        str += "* ";
      }
  
      // Spaces between stars
      for (let k = 1; k <= 2 * i - 1; k++) {
        str += "  ";
      }
  
      // Right stars
      for (let l = 1; l <= n - lowerRow + 1; l++) {
        str += "* ";
      }
  
      console.log(str);
    }
  }
  
  // Call the function
  ButterFly(5);
  

// *           *
// * *       * *
// * * *   * * *
// * * * * * * *
// * * *   * * *
// * *       * *
// *           *
