//Campos em Classes
class User {
  name!: string; //iniciando sem valores
  age!: number;
}

const cassiano = new User();

cassiano.name = "cassiano";
cassiano.age = 28;

console.log(cassiano);

//Constructor
class NewUser {
  name;
  age;
  constructor(name: string, age?: number) {
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
  name;
  readonly wheels = 4;

  constructor(name: string) {
    this.name = name;
  }
}
const fusca = new Car("fusca");
console.log(fusca);

//Herança e Método Super
class Machine {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine("Trator");
console.log(trator);

class KillerMachine extends Machine {
  guns;

  constructor(name: string, guns: number) {
    super(name);
    this.guns = guns;
  }
}

const destroyer = new KillerMachine("Destroyer", 3);
console.log(destroyer);

//Métodos
class Dwarf {
  name;

  constructor(name: string) {
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
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails() {
    console.log(
      `O caminhao do modelo: ${this.model}, tem ${this.hp} cavalos de potência.`
    );
  }
}

const volvo = new Truck("Volvo", 4000);
const scania = new Truck("Scania", 3500);

volvo.showDetails();
scania.showDetails();

//Getters
class Person {
  name;
  surname;

  constructor(name: string, surname: string) {
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
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) {
      return;
    }
    this.x = x;
    console.log(`x: ${x} inserido com sucesso!`);
  }

  set fillY(y: number) {
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

//Implements - Interface Herance
interface showTitle {
  itemTitle(): string;
}

class blogPost implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle() {
    return `O titulo do post é: ${this.title}`;
  }
}

const newPost = new blogPost("Como ser um bom programador?");

console.log(newPost.itemTitle());

class TestingInterface implements showTitle {
  title;

  constructor(title: string) {
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
  public x = 10;
}

class D extends C {
  x = 2;
}

const cInstance = new C();

console.log(cInstance.x);

const dInstance = new D();
console.log(dInstance.x);

//Protected
class E {
  protected x = 10;
  protected protectedMethod() {
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
  private name = "Private"; //somente acessado pela propria classe

  showName() {
    return this.name;
  }

  private privateMethod() {
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
  static prop = "Teste static";

  static staticMethod() {
    console.log("este é um método estático");
  }
}

console.log(StaticMembers.prop);
StaticMembers.staticMethod();

//Generic class
class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
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
  constructor(public name: string, private qty: number, private price: number) {
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
const myClass = class<T> {
  name;

  constructor(name: T) {
    this.name = name;
  }
};

const pessoa = new myClass("joao");
console.log(pessoa.name);

//Abstract Class
abstract class AbstractClass {
  abstract showName(): void;
}

//const newObj = new AbstractClass()

class AbstractExemple extends AbstractClass {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  showName(): void {
    console.log(`O nome é: ${this.name}`);
  }
}

const newAbstractObject = new AbstractExemple("Fulaninho");
newAbstractObject.showName();

//Relações entre classes
class Dog {
  name!: string;
}

class Cat {
  name!: string;
}

const doguinho: Dog = new Cat(); //uso de tipo por classe

console.log(doguinho);

//Encerramento seção de classes - enviar git