"use strict";
//Generics
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData(5));
console.log(showData('teste'));
console.log(showData(true));
//Constraint em generic
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const myObj = { name: 'carro', cor: 'Branca' };
console.log(showProductName(myObj));
const myCar = { name: 'Fusca', wheels: 4, engine: 1.0 };
const myPen = { name: 'Caneta Bic', wheels: false, engine: false, color: 'azul' };
console.log(myCar);
console.log(myPen);
//Type parameters
function getSomeKey(obj, key) {
    return `A chave ${key.toString()} está presente no objeto e tem o valor de ${String(obj[key])}`;
}
const server = {
    hd: '2tb',
    ram: '32gb'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: 'Cassiano',
    age: 28,
    hasDriveLicence: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
//Typeof type operator
const userName = 'Cassiano';
const userName2 = 'Joao';
const someVar = 5;
const testing = 'some text';
//const testing2: CustomType = 'some text2 '
