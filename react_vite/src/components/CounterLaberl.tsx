/* eslint-disable @typescript-eslint/no-unused-vars */
import useCounter from "../hooks/useCounter";

interface ButtonProps {
    text: string;
    onClickFct: () => void;
}

export default function CounterLabel() {
    const { counter } = useCounter();
    return (
        <span>Contador: {counter}</span>
    );
}
