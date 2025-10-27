


let shoppingList =[]

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
    shoppingCart.innerHTML = ""; 
    shoppingList.forEach(function(itemText){
        const listItem = document.createElement("li");
        listItem.innerText = itemText;
        shoppingCart.appendChild(listItem);   
    })
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
        return searchList
}

let typeItem = document.getElementById("typeItem")
let addItemButton = document.getElementById("addItemButton")
let removeItemButton = document.getElementById("removeItemButton")
let shoppingCart= document.getElementById("shoppingcart")

addItemButton.addEventListener("click",function(){
 let item = typeItem.value;

 if (item === "") {
    alert("Please enter an Item.");
    return;
 }

 addItem(item);
 displayList();
 typeItem.value ="";
});

removeItemButton.addEventListener("click",function(){
 removeLastItem();
 displayList();
});