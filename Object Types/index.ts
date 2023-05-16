//Tipo de objeto para funcao com interface
interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e seu preço é R$${product.price}`
  );
  if (product.isAvailable) {
    console.log("O produto está disponível!");
  } else {
    console.log("Que pena, o produto está em falta. :(");
  }
}

const shirt: Product = {
  name: "Camisa",
  price: 19.99,
  isAvailable: true,
};

showProductDetails(shirt);
showProductDetails({ name: "tenis", price: 129.9, isAvailable: false });

//Propriedades opcionais em interfaces
interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o e-mail: ${user.email}`);
  if (user.role) {
    console.log(`A função do usuário é: ${user.role}`);
  }
}

const usuario1: User = { email: "fulano@gmail.com" };
const usuario2: User = { email: "ciclano@gmail.com", role: "Admin" };

showUserDetails(usuario1);
showUserDetails(usuario2);

//Readonly
interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "Chevrolet",
  wheels: 4,
};
console.log(fusca);
//fusca.wheels = 5 - nao pode ser alterado por ser readonly

//Index Singnature
interface coordObject {
  [index: string]: number;
}

let coords: coordObject = {
  x: 1,
};
coords.y = 15;
console.log(coords);

//Extending interfaces
interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: string[];
}

const cassiano: Human = {
  name: "Cassiano",
  age: 28,
};

const bakugo: SuperHuman = {
  name: "Bakugo",
  age: 33,
  superpowers: ["Explosao, Muito fogo"],
};
console.log(cassiano);
console.log(bakugo);

//Intersection Types
interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};

console.log(arnold);

//ReadOnly Array
let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Banana"];

//myArray[3] = 'Mamão'

console.log(myArray);

myArray.forEach((item) => {
  console.log("Fruta:" + item);
});

myArray = myArray.map((item) => {
  return `Fruta: ${item}`;
});
console.log(myArray);

//Tuplas
type fiveNumbers = [number, number, number, number, number]
const myNumberArray: fiveNumbers = [1,2,3,4,5]
console.log(myNumberArray)

type nameAndAge = [string, number]
const anotherUser: nameAndAge = ['Fulano', 23]
console.log(anotherUser)

//tupla com readonly
function showNumbers(numbers: readonly [number, number]){
  console.log(numbers[0])
  console.log(numbers[1])
}
showNumbers([2,3])