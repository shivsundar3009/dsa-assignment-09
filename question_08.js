class Main {
    // This function prints common elements in ar1, ar2, and ar3
    findCommon(ar1, ar2, ar3) {
      // Initialize starting indexes for ar1, ar2, and ar3
      let i = 0;
      let j = 0;
      let k = 0;
      let commonElements = [];
  
      // Iterate through three arrays while all arrays have elements
      while (i < ar1.length && j < ar2.length && k < ar3.length) {
        // If x = y and y = z, add any of them to the commonElements array and
        // move ahead in all arrays
        if (ar1[i] === ar2[j] && ar2[j] === ar3[k]) {
          commonElements.push(ar1[i]);
          i++;
          j++;
          k++;
        }
        // x < y
        else if (ar1[i] < ar2[j]) {
          i++;
        }
        // y < z
        else if (ar2[j] < ar3[k]) {
          j++;
        }
        // We reach here when x > y and z < y, i.e., z is the smallest
        else {
          k++;
        }
      }
  
      return commonElements;
    }
  }
  