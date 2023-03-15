const shoppingList = [
    't-shirt',
    'jeans',
    'sweatshirts',
    'hoodies',
    'shoes',
    'socks'
];
// console.dir(shoppingList);

const list = document.getElementById('shopping');
// console.log(list);

let counter = 0;

while (counter < shoppingList.length) {
    list.innerHTML += `<li>${shoppingList[counter]}</li>`;
    counter++;
};

// let listItem = '';
// for (let a = 0; a < shoppingList.length; a++) {
//     listItem += `<li>${shoppingList[a]}</li>`;
// }
// list.innerHTML += listItem;