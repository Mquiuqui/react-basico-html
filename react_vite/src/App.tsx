import Content from './components/Content'
import CounterContextProvider from './context/CounterContextProvider'

export default function App() {

    return (
        <CounterContextProvider>
            <Content />
        </CounterContextProvider>
    )
}