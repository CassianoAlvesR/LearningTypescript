"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Exemplo Decorator
function myDecorator() {
    console.log("iniciando decorator..");
    return function (target, propertKey, descriptor) {
        console.log("executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log(`Teste execucao do metodo`);
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myObj = new MyClass();
myObj.testing();
//Multiplos Decorators
function a() {
    return function (target, propertKey, descriptor) {
        console.log("executou A");
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log("executou B");
    };
}
class MultipleDecorators {
    testing() {
        console.log("Fim da execucao");
    }
}
__decorate([
    a() //depois os subsequentes
    ,
    b() //executa primeiro o mais abaixo - proximo de onde é chamado
], MultipleDecorators.prototype, "testing", null);
const objMultipleDecorators = new MultipleDecorators();
objMultipleDecorators.testing();
//Decorator de Classe
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === "User") {
        console.log("criano usuario..");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const cassiano = new User("Ciano");
console.log(cassiano.name);
//Decorator de Método
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é ${this.name}`;
    }
}
__decorate([
    enumerable(true)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
//Accessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(true)
], Monster.prototype, "showAge", null);
const monster = new Monster("Monstro1", 1);
console.log(monster);
//Property Decorator
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber() //reestruturacao do objeto é aplicada por meio do decorator
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem);
//Exemplo Real: Class Decorator
//objetivo: criar função para inserir data de criação dos objetos
function adicionaDataCriacao(created) {
    created.prototype.createdAt = new Date();
}
let Livro = class Livro {
    constructor(id) {
        this.id = id;
    }
};
Livro = __decorate([
    adicionaDataCriacao
], Livro);
let Revista = class Revista {
    constructor(id) {
        this.id = id;
    }
};
Revista = __decorate([
    adicionaDataCriacao
], Revista);
// duas classes adicionadas
// instanciacao dos objetos com ID
const novoLivro = new Livro("1");
const novaRevista = new Revista("1");
console.log(novoLivro);
console.log(novaRevista);
//Exemplo real: Method Decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        //console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log('Usuario já postou');
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro post!", newPost.alreadyPosted);
newPost.post("Meu segundo post!", newPost.alreadyPosted);
newPost.post("Meu terceiro post!", newPost.alreadyPosted);
//Exemplo real: Property Decorator
function max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            if (newValue.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos.`);
                return;
            }
            else {
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    max(10)
], Admin.prototype, "username", void 0);
let rodrigo = new Admin('RodrigoADM123456');
let cass = new Admin('Cass');
console.log(cass);
//fim de seção
