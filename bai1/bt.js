//cau1
const animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    },
]

let animalsName = animals.map((item) => {
    return item.name
})
console.log(animalsName);

//cau2
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var evenNumbers = numbers.filter((item) => {
    return item % 2 == 0
})
console.log(evenNumbers);

//cau3
var strings = ["cat", "dog", "hat", "mat", "java"]
var at_strings = strings.filter(
    (item) => item.includes("at")
)
console.log(at_strings);

//cau4
const playerProfile =[
    {
        name : "Ronaldo",
        team : "MU"
    },
    {
        name : "Messi",
        team : "Barca"
    },
    {
        name : "Neymar",
        team : "PSG"
    }
]

const getMApFromArray = data => {
    return data.reduce( (obj,item) => {
        obj[item.name] = { team: item.team };
        return obj
    }, {})
}
const playerProfileModified = getMApFromArray(playerProfile)
console.log(playerProfileModified);

