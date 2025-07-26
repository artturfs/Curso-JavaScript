const data = [
    { name: "Sujeito", age: 23, salary: 4000, active: true, team: "Frontend", bonus: 0},
    { name: "Jose", age: 36, salary: 6000, active: false, team: "Backend", bonus: 0},
    { name: "Ana", age: 19, salary: 1500, active: false, team: "Estagiario", bonus: 0},
    { name: "Artur", age: 21, salary: 2000, active: true, team: "Frontend", bonus: 0},
    { name: "Bianca", age: 29, salary: 4500, active: false, team: "Mobile", bonus: 0},
]

// find() é utilizado para localizar o primeiro elemento em um array que satisfaça uma condição específica

const find = data.find((user) => {
    return user.age > 1
})

console.log("================Find================", "\n",find)

// filter() é usado para criar um novo array com todos os elementos que passam em um teste específico

const filter = data.filter((user) => {
    return user.salary > 1000 && user.active
})

console.log("================Filter================", "\n",filter)

// findIndex é usado para encontrar o índice do primeiro elemento em um array que satisfaça uma condição específica

const findIndex = data.findIndex((user) => {
    return user.name === "Artur"
})

console.log("================FindIndex================", "\n", findIndex)

// map() é usado para criar um novo array com os resultados de uma função aplicada a cada elemento de um array

const map = data.map((user, index) => {
    return `Olá ${user.name}`
})

console.log("================Map================", "\n", map)

// reduce() é usado para reduzir um array a um único valor, executando uma função de redução em cada elemento do array

const reduce = data.reduce((total, user) => {
    return total + user.salary
}, 0)

console.log("================Reduce================", "\n", reduce)

// forEach() é usado para executar uma função em cada elemento de um array

const forEach = data.forEach((user, index) => {
    user.bonus = user.salary * 0.5
})

console.log("================ForEach================", "\n", data)
