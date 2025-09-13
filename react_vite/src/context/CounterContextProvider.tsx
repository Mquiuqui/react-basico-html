
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createContext, useState } from "react";
import { CounterContext } from "./CounterContext";

export default function CounterContextProvider({ children }: { children: React.ReactNode }) {
    const [counter, setCounter] = useState(0);

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    );
}
