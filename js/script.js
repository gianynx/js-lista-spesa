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

let dress = '';
let counter = 0;

while (counter < shoppingList.lenght && !dress) {
    if (shoppingList[counter] === dress) {
        dress = true;
    }
    counter++;
};

list.innerText += dress;