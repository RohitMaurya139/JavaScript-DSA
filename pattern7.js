function ButterFly(n) {
  //upperportion
  const loop = Math.floor(n / 2);
  let str;
  for (let i = 1; i <= loop; i++) {
    str = "";
    for (let j = 1; j <= i; j++) {
      str += "* ";
    }
    for (let j = 1; j <= n - 2 * i; j++) {
      str += "  ";
    }
    for (let k = 1; k <= i; k++) {
      str += "* ";
    }
    console.log(str);
  }
  /*----------------------------------------------------------------------*/
  //middel Portion
  str = "";
  for (let i = 1; i <= n; i++) {
    str += "* ";
  }
  console.log(str);
  /* ------------------------------------------------------------------------*/
  //lowerportion
  let lowerRow = loop + 2;
  for (let i = 1; i <= loop; i++, lowerRow++) {
    str = "";
    for (let j = 1; j <= n - lowerRow + 1; j++) {
      str += "* ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      str += "  ";
    }

    for (let l = 1; l <= n - lowerRow + 1; l++) {
      str += "* ";
    }
    console.log(str);
  }
}

ButterFly(5);

// *           *
// * *       * *
// * * *   * * *
// * * * * * * *
// * * *   * * *
// * *       * *
// *           *
