import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const useCounter = () => {
    const {counter,setCounter} = useContext(CounterContext);

    return {counter,setCounter};
};
export default useCounter;