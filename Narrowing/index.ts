// 1 - Type Guard
function sum(a: number | string | boolean, b: number | string | boolean) {
  if (typeof a === "string" && typeof b === "string") {
    console.log("A soma das strings é: " + (parseFloat(a) + parseFloat(b)));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log("A soma dos números é: " + (a + b));
  } else {
    console.log("É um tipo inválido! Soma não realizada.");
  }
}
//testes dois tipo validos e um invalido
sum("9", "9");
sum(1, 9);
sum("1", 1);

// 2 - Ver se valor existe
function operations(arr: number[], operation?: string | undefined) {
  if (operation) {
    switch (operation) {
      case "sum":
        const sum = arr.reduce((i, total) => i + total);
        console.log(sum);
        break;
      case "multiply":
        const multiply = arr.reduce((i, total) => i * total);
        console.log(multiply);
        break;
      case "decrease":
        const decrease = arr.reduce((i, total) => i - total);
        console.log(decrease);
        break;
    }
  } else {
    console.log("Nenhuma operacao definida.");
  }
}
//testes operacoes elaboradas
operations([2, 2, 2], "sum"); //6
operations([2, 2, 2], "multiply"); //8
operations([10, 2, 2], "decrease"); //6

// 3 - Instance Of
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

const fulano = new User("Fulano");
const ciclano = new SuperUser("Ciclano");

console.log(fulano);
console.log(ciclano);

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    console.log(
      `Olá ${user.name}, seja muito bem vindo(a), você possúi permissão avancada :)`
    );
  } else if (user instanceof User) {
    console.log(`Olá ${user.name}, seja bem vindo(a).`);
  }
}

userGreeting(fulano);
userGreeting(ciclano);

// 4 - Operador In
class Cat {
  name;
  breed;

  constructor(name: string, breed?: string) {
    this.name = name;
    if (breed) {
      this.breed = breed;
    }
  }
}

const magi = new Cat("Magi");
const alda = new Cat("Alda", "Persa");

function showCatDetails(cat: Cat) {
  if ("breed" in cat) {
    console.log(`A gata é da Raça: ${cat.breed}`);
    //console.log("A gata é da Raça: " + cat.breed);
  } else {
    console.log("A gata é uma SRD");
  }
}
//exibe os objetos com a tratativa por valor na propriedade
showCatDetails(magi);
showCatDetails(alda);

//Desafio 03
function reviewUsuarios(review: number | boolean) {
  if (typeof review === "number") {
    switch (review) {
      case 1:
        console.log(`Review de apenas uma estrela :(`);
        break;
      case 2:
        console.log(`Review de apenas duas estrela :(`);
        break;
      case 3:
        console.log(`Review de três estrelinhas :|`);
        break;
      case 4:
        console.log(`Review de quatro estrelas :)`);
        break;
      case 5:
        console.log(`Review de cinco estrelas, uhul :D`);
        break;
      default:
        console.log(`Fora do range de 1 a 5 previsto`);
        break;
    }
  } else if (!review) {
    console.log(`Falso, não foi enviado Review pelo Usuário (>.<)`);
  } else {
    console.log(`Não é number e não é falso!`);
  }
}

reviewUsuarios(5);
reviewUsuarios(4);
reviewUsuarios(3);
reviewUsuarios(2);
reviewUsuarios(1);
reviewUsuarios(0);
reviewUsuarios(true);
reviewUsuarios(false);
