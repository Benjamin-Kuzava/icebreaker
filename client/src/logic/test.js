const checkForZeroes = (grid) => {
    let result = true
    for (const row of grid) {
        for (const node of row) {
          if (node === 0) {
              result = false;
          }
        }
      }
      return result
}

console.log(checkForZeroes([[1,0,1],[1,1,1],[1,1,1]]))