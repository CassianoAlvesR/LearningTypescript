"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível!");
    }
    else {
        console.log("Que pena, o produto está em falta. :(");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: "tenis", price: 129.9, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const usuario1 = { email: "fulano@gmail.com" };
const usuario2 = { email: "ciclano@gmail.com", role: "Admin" };
showUserDetails(usuario1);
showUserDetails(usuario2);
const fusca = {
    brand: "Chevrolet",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 1,
};
coords.y = 15;
console.log(coords);
const cassiano = {
    name: "Cassiano",
    age: 28,
};
const bakugo = {
    name: "Bakugo",
    age: 33,
    superpowers: ["Explosao, Muito fogo"],
};
console.log(cassiano);
console.log(bakugo);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log(arnold);
//ReadOnly Array
let myArray = ["Maça", "Laranja", "Banana"];
//myArray[3] = 'Mamão'
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta:" + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
const anotherUser = ['Fulano', 23];
console.log(anotherUser);
//tupla com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([2, 3]);
