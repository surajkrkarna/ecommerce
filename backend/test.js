const user = [
    {
        name: "kumar",
        project: "testing",
    },
    {
        name: "suraj",
        project: "testing",
    }
]

// const userOne = user.map((users) => { return (users.name == 'kumar') ? users : '' });
// console.log(userOne)

let stt = user.find(usrs => (usrs.name == "suraj") ? usrs : '')
console.log(stt)

let StringOne = 'suraj'
let stringTwo = 'karna'

console.log(`My full name is ${StringOne};${stringTwo}`)


