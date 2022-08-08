//  === make avarage from array

const numbersOfArray = [10,20,30,40,50]

function avarageOfArray(number) {
   let sum = 0;
// make avarage from array..
  
  
   for(let i = 0;i<number.length;i++){
      sum  += number[i]
   }
console.log(number.length)
   const avarage = sum/number.length;
   return avarage


}

const finalAvarage = avarageOfArray(numbersOfArray)
console.log(finalAvarage)