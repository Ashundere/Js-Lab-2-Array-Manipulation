


shoppingList =[]

const addItem = item =>{
    if (shoppingList.includes(item)){
        console.log( "That item is already on the list!")
    } else{
        shoppingList.push(item)
    }

}

const removeLastItem =()=>{
    shoppingList.pop()
}

const displayList =() =>{
    console.log(shoppingList)
}

const filterItems = term =>{
    searchList =[]
    shoppingList.filter(item => {
        itemLower= item.toLowerCase();
        termLower= term.toLowerCase();
        if (itemLower.includes(termLower)){
            searchList.push(itemLower)
        }
})
        console.log(searchList)
}

addItem("milk")
addItem("Cheese")
addItem("grapes")
addItem("cheerios")

displayList()
filterItems("Chee")