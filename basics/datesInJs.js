let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())

//let myCreatedDate = new Date(2023, 0 , 23)//single digit me zero ko array ki tarah liya jata hai ise january se pretend kiya jata hai
//console.log(myCreatedDate.toLocaleString())
//let myCreatedDate = new Date(2023, 0 , 23,5,3)
//console.log(myCreatedDate.toLocaleString())

let myCreatedDate = new Date("2026-02-01")//string me month ko 1 se start kiya jata hai
//console.log(myCreatedDate.toLocaleDateString())
//console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))



