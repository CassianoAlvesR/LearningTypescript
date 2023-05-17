//Void
function withoutReturn(): void {
  console.log("Esta funcao não tem retorno!");
}

withoutReturn();

// Callback como argumento
function comprimentando(name: string): string {
  return `Olá ${name}`;
}

function antesComprimentar(f: (name: string) => string, userName: string) {
  console.log("Preparando a funcao!");
  const comp = f(userName);
  console.log(comp);
}

antesComprimentar(comprimentando, "Fulano");
antesComprimentar(comprimentando, "Ciclano");

//Generic function
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}
//uso valores genericos
const newObject = mergeObjects(
  { name: "Fulano" },
  { age: 23, job: "Programmer" }
);
console.log(newObject);

//Constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;
  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }

  return biggest;
}

console.log(biggestNumber(6, 2));
console.log(biggestNumber("13", "4"));
//console.log(biggestNumber("11",5))

// Especificar tipo de argumento na chamada da funcao*
function mergeArray<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mergeArray([1, 2, 3], [5, 6]));
console.log(mergeArray<number | string>([1, 2, 3], ["teste", "teste2"]));

//Parametros opcionais
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`;
  }
  return `Olá ${name}, tudo bem?`;
}
//com parametro opcional ou sem
console.log(modernGreeting("Fulano", "Sr"));
console.log(modernGreeting("Ciclano"));

//Parametro default
function somaDefault(n: number, m = 10) {
  return n + m;
}

console.log(somaDefault(10));
console.log(somaDefault(10, 20));

//Tipo unknown
function doSomething(x: unknown) {
  console.log(x);
}
doSomething("1");
doSomething(1);
doSomething(true);

//Never
function showErrorMessage(msg: string): never {
  throw new Error(msg);
}
//showErrorMessage("algum erro!")

//Rest operator - parameters
function sumAll(...numeros: number[]) {
  return numeros.reduce((number, sum) => sum + number);
}

console.log(sumAll(1, 2, 3, 4, 5));
console.log(
  sumAll(10, 50, 90, 140, 230, 390, 500, 600, 799, 850, 990, 1000, -4649)
);

//Destructuring como parametro
function showProductDetails({
  name,
  price,
}: {
  name: string;
  price: number;
}): string {
  return `O nome do produto é ${name} e ele custa R$${price}`;
}

const shirt = { name: "Camisa", price: 49.9 };

console.log(showProductDetails(shirt));
