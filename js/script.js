const shoppingList = [
    't-shirt',
    'jeans',
    'sweatshirts',
    'hoodies',
    'shoes',
    'socks'
];
// console.dir(shoppingList);

const list = document.querySelector('ul');
// console.log(list);

let counter = 0;

while (counter < shoppingList.lenght) {
    list.innerHTML += `<li>${shoppingList[counter]}</li>`;
    counter++;
};