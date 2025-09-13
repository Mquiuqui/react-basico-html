/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from './Header'
import List from './List'
import Button from './Button'
import useCounter from '../hooks/useCounter';
import { InfoBox } from './InfoBox';

function Content() {

    const { counter, setCounter } = useCounter();

    const increment = () => {
        alert(`Botão clicado ${counter} vezes!`)
        setCounter(counter + 1);
    }; 

    return (
        <>
            <Header text="Aprendendo React do Zero!" />
            <p>Este é um exemplo simples de um componente React.</p>
            <List />
            <Button text="Clique aqui" onClickFct={() => increment()} />
            <InfoBox />
        </>

    )
}

export default Content
