//Number 1-100
// i is dividle by 3 == "Fizz"
//i is divible by 5 == "Buzz"
//i is divisible by 5 & 3 ==="Fizz Buzz"
//i is not any of those == number

// (var i = 1; i <=100; i++){
  if(i % 3 == 0 && i % 5 == 0){
    console.log("Fizz Buzz")
  }
  else if (i % 3 ==0){
    console.log("Fizz")
  }
  else if (i % 5 == 0){
    console.log("Buzz")
  }
  else{
    console.log(i)
  }

//}
for (var i = 1; i <=100; i++){
  if (i % 15 == 0) console.log("Fizz Buzz")
  else if(i % 3 == 0) console.log("Fizz")
  else if (i % 5 == 0) console.log("Buzz")
  else console.log(i)
}
