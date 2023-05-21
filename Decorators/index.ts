//Exemplo Decorator
function myDecorator() {
  console.log("iniciando decorator..");

  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executando decorator");
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  };
}

class MyClass {
  name!: string;

  @myDecorator()
  testing() {
    console.log(`Teste execucao do metodo`);
  }
}
const myObj = new MyClass();
myObj.testing();

//Multiplos Decorators
function a() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou A");
  };
}

function b() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou B");
  };
}

class MultipleDecorators {
  @a() //depois os subsequentes
  @b() //executa primeiro o mais abaixo - proximo de onde é chamado
  testing() {
    console.log("Fim da execucao");
  }
}
const objMultipleDecorators = new MultipleDecorators();
objMultipleDecorators.testing();

//Decorator de Classe
function classDec(constructor: Function) {
  console.log(constructor);
  if (constructor.name === "User") {
    console.log("criano usuario..");
  }
}

@classDec
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}
const cassiano = new User("Ciano");
console.log(cassiano.name);

//Decorator de Método
function enumerable(value: boolean) {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(true)
  showName() {
    console.log(this);
    return `O nome da máquina é ${this.name}`;
  }
}

const trator = new Machine("Trator");
console.log(trator.showName());

//Accessor decorator
class Monster {
  name?;
  age?;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(true)
  get showName() {
    return `Nome do monstro: ${this.name}`;
  }

  @enumerable(true)
  get showAge() {
    return `Idade do monstro: ${this.age}`;
  }
}

const monster = new Monster("Monstro1", 1);
console.log(monster);

//Property Decorator
function formatNumber() {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      value = newVal.padStart(5, "0");
    };
    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

class ID {
  @formatNumber() //reestruturacao do objeto é aplicada por meio do decorator
  id;

  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new ID("1");
console.log(newItem);

//Exemplo Real: Class Decorator
//objetivo: criar função para inserir data de criação dos objetos
function adicionaDataCriacao(created: Function) {
  created.prototype.createdAt = new Date();
}

@adicionaDataCriacao
class Livro {
  id;
  createdAt?: Date;

  constructor(id: string) {
    this.id = id;
  }
}

@adicionaDataCriacao
class Revista {
  id;
  createdAt?: Date;

  constructor(id: string) {
    this.id = id;
  }
}

// duas classes adicionadas
// instanciacao dos objetos com ID
const novoLivro = new Livro("1");
const novaRevista = new Revista("1");

console.log(novoLivro);
console.log(novaRevista);

//Exemplo real: Method Decorator
function checkIfUserPosted() {
  return function (
    target: Object,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    //console.log(childFunction);
    descriptor.value = function(...args: any[]){
      if(args[1] === true){
        console.log('Usuario já postou')
        return null
      } else {
        return childFunction.apply(this, args)
      }
    }

    return descriptor
  };
}

class Post {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post do usuário: ${content}`);
  }
}

const newPost = new Post();

newPost.post("Meu primeiro post!", newPost.alreadyPosted);

newPost.post("Meu segundo post!", newPost.alreadyPosted);

newPost.post("Meu terceiro post!", newPost.alreadyPosted);

//Exemplo real: Property Decorator
function max(limit: number){
  return function (target: Object, propertyKey: string){
    let value: string

    const getter = function(){
      return value
    }

    const setter = function(newValue: string){
      if (newValue.length > limit){
        console.log(`O valor deve ter no máximo ${limit} dígitos.`)
        return
      } else {
        value = newValue
      }
    }

    Object.defineProperty(target, propertyKey,{
      get: getter,
      set: setter
    });
  }
}

class Admin {
  @max(10)
  username;

  constructor(username: string){
    this.username = username
  }
}

let rodrigo = new Admin('RodrigoADM123456')
let cass = new Admin('Cass')
console.log(cass)

//fim de seção