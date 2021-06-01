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
        price: 50
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
const addToShoppingList = (newId, itemName, itemAmount, itemPrice) => {
    const time = new Date().getTime()
    const date = new Date(time) 
    const item = {
        id: newId,
        name: itemName,
        amount: itemAmount,
        price: itemPrice,
        dateCreated: date.toString()
    }
    foods.push(item)
}
addToShoppingList(calcId(foods), "Tea", 3, 10)
addToShoppingList(calcId(foods), "Water", 2, 16)
addToShoppingList(calcId(foods), "Pasta", 1, 4)
addToShoppingList(calcId(foods), "Steak", 2, 12)
addToShoppingList(calcId(foods), "Flour", 1, 5)

for(const food of foods){
    if(food.price > 8){
        console.log(food)
    }
}