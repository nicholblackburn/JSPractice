// js function takes an array of nums and finds 2nd lowest & 2nd highest answer

var arr = [7, 90, 32, 19, 50, 100, 90, 1000, 0, -180, -3, -5, 77, 9, 3, 999]

arr.sort(function(a, b){return a - b})

console.log(arr)

var secondLowest = arr[1]
console.log("the second lowest is: " + secondLowest)

 var secondHighest = arr[arr.length - 2]
 console.log("the second highest is: " + secondHighest)