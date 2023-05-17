//Generics
function showData<T>(arg: T):string {
  return `O dado é ${arg}`
}

console.log(showData(5))
console.log(showData('teste'))
console.log(showData(true))

//Constraint em generic
function showProductName<T extends {name: string}>(obj: T){
  return `O nome do produto é ${obj.name}`
}

const myObj = {name: 'carro', cor: 'Branca'}
console.log(showProductName(myObj))

//Interfaces com Generics
interface MyObject<T,U,Q> {
  name: string
  wheels: T
  engine: U
  color?: Q
}

type Car = MyObject<number,number,string>
type Pen = MyObject<boolean,boolean,string>

const myCar:Car = {name: 'Fusca', wheels: 4, engine: 1.0}
const myPen:Pen = {name: 'Caneta Bic', wheels: false, engine: false, color: 'azul'}

console.log(myCar)
console.log(myPen)

//Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K){
  return `A chave ${key.toString()} está presente no objeto e tem o valor de ${String(
    obj[key]
  )}`;
}

const server = {
  hd: '2tb',
  ram: '32gb'
}

console.log(getSomeKey(server, 'ram'))
//console.log(getSomeKey(server, 'teste'))

//KeyOfType Operator
type Character = {name: string, age: number, hasDriveLicence: boolean}

type C = keyof Character

function showCharName(obj: Character, name: C):string {
  return `${obj[name]}`
}

const myChar: Character = {
  name: 'Cassiano',
  age: 28,
  hasDriveLicence: true
}
console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))

//Typeof type operator
const userName: string = 'Cassiano'
const userName2: typeof userName = 'Joao'

//Indexed acess type
type Truck = {km: number, kg:number, description: string}
type km = Truck['km']

//Conditional Expressions Types
interface A{}

interface B extends A {}

interface Teste {
  showName():string
}

type myType = B extends A ? number : string
const someVar:myType = 5
//const someVar2:myType = 'teste'
type myTypeB = Teste extends {showName(): string} ? string:boolean

//Template Literals Type
type testA = 'text'

type CustomType = `some ${testA}`

const testing: CustomType = 'some text'
//const testing2: CustomType = 'some text2 '
