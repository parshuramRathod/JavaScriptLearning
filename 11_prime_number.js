function primeNumber(numberToCheck){
    for (let index = 2; index < numberToCheck; index++) {
      if(numberToCheck%index==0) {
          return false;
      }
    }
    return true;
  }
  
  console.log(primeNumber(11));
  console.log(primeNumber(9));
  console.log(primeNumber(29));
  const array = [6,7,11,23,46,77];
