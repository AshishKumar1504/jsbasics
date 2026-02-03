//array
const myArr =[0,1,2,3,4,5]
const myArr2 =["Shaktiman","KirtiSuresh","Murnal","Dhanush","Vijay"]
const marr = new Array(1,2,3,4,5)
//console.log(myArr[0])

// myArr.push(6)
// myArr.pop()
// myArr.unshift(10)//array ke start me diya gya value add kr dega 
// myArr.shift()//array ke start se diya gya value ko delete kr dega
// console.log(myArr)
// console.log(myArr.includes(9))//it gives a boolean value which is false
// console.log(myArr.indexOf(9))//It gives -1 because if any element that not exist in the array then it return -1
const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)

// console.log(typeof(newArr))

//SLICE , SPLICE ++++++++++++++++++++++++++++++++++++++

console.log("A ",myArr)
const myn1 =myArr.slice(1,3)//It generate a copy that we want to print
console.log(myn1)
console.log("B ",myArr)

const myn2 =myArr.splice(1,3)//it remove the partcular section that we want to print from the main array and it print in 
// the new section from the main array 
console.log("C ",myArr)
console.log(myn2)