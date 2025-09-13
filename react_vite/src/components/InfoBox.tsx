import { useEffect, useState } from "react";
import useCounter from "../hooks/useCounter";

export function InfoBox(){
    const { counter } = useCounter();
    const [resto,setResto] = useState<number>(0);

    useEffect(()=>{
        setResto(counter % 2);
    },[counter])

    return(
        <div>
            <p> o resto da divisão é {resto}</p>
            {resto === 0 ? <p>O contador é par</p> : <p>O contador é ímpar</p>}
        </div>
    )
}