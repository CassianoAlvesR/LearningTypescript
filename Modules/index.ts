//Importação de Arquivos
import importGreet from "./greet.js";

importGreet();

//Importação de Variáveis
import { x } from "./variable";
console.log(x);

//Múltiplas Importações
import { a, b, myFunction } from "./multiple.js";
console.log(a);
console.log(b);
myFunction();

//Alias
import { someName as name } from "./changename.js";
console.log(name);

//Import all - object
import * as myNumbers from "./numbers";
console.log(myNumbers);
const nUm = myNumbers.n1;
console.log(nUm);

//Importando tipos
import { Human } from "./types.js";

class User implements Human {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const ciclano = new User("Ciclano R", 25);
console.log(ciclano);
