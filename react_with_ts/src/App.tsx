import React, {createContext} from 'react';

//Importação de Componentes
import FirstComponent from './components/FirstComponent';
//Desestruturando Props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';
//Use State
import State from './components/State';

//Type
type textOrNull = string | null
type fixed = 'Isso' | 'Aquilo'

//Context Interface
interface IAppContext {
  language: string,
  framework: string,
  projects: number,
}

function App() {

  //Variaveis
  const name: string = 'Cassiano';
  const age: number = 28;
  const isWorking: boolean = true;

  //Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  }

  //Type
  const myText: textOrNull = "Tem algum texto aqui."
  let mySecondText: textOrNull = null;

  //mySecondText = 'teste';

  const testandoFixed: fixed = 'Aquilo'

  //Context API
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 1,
  };

  const AppContext = createContext

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (<div><p>Está trabalhando.</p></div>)}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name='Fulano' />
      <Destructuring
        title="Primeiro Post"
        content="Algum conteudo"
        commentsQty={10}
        tags={["ts", "js"]}
        category={Category.TS}
      />
      <Destructuring
        title="Segundo Post"
        content="Outro conteudo"
        commentsQty={10}
        tags={["PYTHON", "PY"]}
        category={Category.PY}
      />
      <State />
      {myText && <p>Tem o texto "{myText}" na variável</p>}
      {mySecondText && <p>Tem o texto "{mySecondText}" na variável</p>}
      {testandoFixed && <p>{testandoFixed}</p>}
    </div>
  );
}

export default App;
