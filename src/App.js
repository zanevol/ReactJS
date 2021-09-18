import './App.sass';
import {SimpleText} from "./components/SimpleText";
import {Message} from "./components/Message"

function App() {
    const question = '??';

    return (
        <div className="App">
            <SimpleText name="Andrey" age={30}/>
            <Message question={question}/>
        </div>
    );
}

export default App;
