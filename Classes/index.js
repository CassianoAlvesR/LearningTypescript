"use strict";
//Campos em Classes
class User {
}
const cassiano = new User();
cassiano.name = "cassiano";
cassiano.age = 28;
console.log(cassiano);
//Constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const fulano = new NewUser("Fulano", 21);
const ciclano = new NewUser("Ciclano");
console.log(fulano);
console.log(ciclano);
//Campo Readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("fusca");
console.log(fusca);
//Herança e Método Super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
console.log(trator);
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 3);
console.log(destroyer);
//Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("hey stranger!");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
console.log(jimmy);
//This
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`O caminhao do modelo: ${this.model}, tem ${this.hp} cavalos de potência.`);
    }
}
const volvo = new Truck("Volvo", 4000);
const scania = new Truck("Scania", 3500);
volvo.showDetails();
scania.showDetails();
//Getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return console.log(`O nome completo é ${this.name} ${this.surname}`);
    }
}
const cassianoAlves = new Person("Cassiano", "Alves");
console.log(cassianoAlves.name);
console.log(cassianoAlves.fullName);
//Setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log(`x: ${x} inserido com sucesso!`);
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log(`Y: ${y} inserido com sucesso!`);
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 2;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post é: ${this.title}`;
    }
}
const newPost = new blogPost("Como ser um bom programador?");
console.log(newPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo é: ${this.title}`;
    }
}
//Override de Métodos
class Base {
    someMethod() {
        console.log("algo");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("testando outra coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
//Visibilidade
//Public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
    constructor() {
        super(...arguments);
        this.x = 2;
    }
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
//Protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("este metodo é protegido");
    }
}
class F extends E {
    showX() {
        console.log(`Valor de X: ${this.x}`);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
//Private
class PrivateClass {
    constructor() {
        this.name = "Private"; //somente acessado pela propria classe
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("metodo privado");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObject = new PrivateClass();
console.log(pObject.showName());
pObject.showPrivateMethod();
//Static Members
class StaticMembers {
    static staticMethod() {
        console.log("este é um método estático");
    }
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
//Generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é ${this.first}`;
    }
    get showSecond() {
        return `O second é ${this.second}`;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(newItem.showSecond);
const newItem2 = new Item(2, true);
console.log(newItem2.showFirst);
console.log(newItem2.showSecond);
//Parameters Properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Quantidade: ${this.qty}`;
    }
    get showPrice() {
        return `Preço: ${this.price}`;
    }
}
const newShirt = new ParameterProperties("camisa", 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
//Class Expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("joao");
console.log(pessoa.name);
//Abstract Class
class AbstractClass {
}
//const newObj = new AbstractClass()
class AbstractExemple extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const newAbstractObject = new AbstractExemple("Fulaninho");
newAbstractObject.showName();
//Relações entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat(); //uso de tipo por classe
console.log(doguinho);
//Encerramento sessão de classes - enviar git
