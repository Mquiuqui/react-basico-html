import CounterLabel from "./CounterLaberl";

interface ButtonProps {
    text: string;
    onClickFct: () => void;
}

export default function Button({ text, onClickFct }: ButtonProps) {
    return (
        <button onClick={onClickFct}>
            {text}.
             <CounterLabel />
        </button>
    );
}
