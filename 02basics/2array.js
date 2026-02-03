const marvel_heros =["Spiderman", "Thor","Ironman"]
const cd_heros =["superman","flash","Batman"]
// marvel_heros.push(cd_heros)
// console.log(marvel_heros)

// const heros = marvel_heros.concat(cd_heros)
// console.log(heros)

// const allHeros =[...marvel_heros,...cd_heros]
// console.log(allHeros)

const another_arr =[0,1,2,3,[4,5,6],7,8,[9,8,7,[10,11,12]]]
const real_another_arr = another_arr.flat(4)
console.log(real_another_arr)

console.log(Array.isArray("Ashish"))

console.log(Array.from("Ashish"))
console.log(Array.from({name:"Ashish"}))//key ko array me nhi tod pata hai output-[]

const score1=100
const score2=200
const score3=300

console.log(Array.of(score1,score2,score3))
