const foods = [
    {
        id: 1,
        name: "Milk",
        amount: 1,
        price: 2.50
    },
    {
        id: 2,
        name: "Bread",
        amount: 1,
        price: 1.50
    },
    {
        id: 3,
        name: "Eggs",
        amount: 2,
        price: 1.89
    },
    {
        id: 4,
        name: "Greek Yogurt",
        amount: 3,
        price: 3
    },
    {
        id: 5,
        name: "Tuna",
        amount: 8,
        price: 0.78
    },
    {
        id: 6,
        name: "Coffee",
        amount: 2,
        price: 3.89
    }
]
const calcId = (arr) => {
    const lastIndex = arr.length - 1 
    if (lastIndex === -1) {
        const newId = 1
        return newId
    }
    const lastItemId = arr[lastIndex].id
    const newId = lastItemId + 1
    return newId
}
const tea = {
    id: calcId(foods),
    name: "Tea",
    amount: 3,
    price: 10
}
const water = {
    id: calcId(foods),
    name: "Water",
    amount: 2,
    price: 16
}
const pasta = {
    id: calcId(foods),
    name: "Pasta",
    amount: 1,
    price: 4
}
const steak = {
    id: calcId(foods),
    name: "Steak",
    amount: 2,
    price: 12
}
const flour = {
    id: calcId(foods),
    name: "Flour",
    amount: 1,
    price: 5
}
const addToShoppingList = (newId, itemName, itemAmount, itemPrice) => {
    const item = {
        id: newId,
        name: itemName,
        amount: itemAmount,
        price: itemPrice,
        dateCreated: Date.now()
    }
}
foods.push()
console.log(foods)