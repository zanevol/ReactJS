import './App.sass';
import {SimpleText} from "./components/SimpleText";
import {Counter} from "./components/Counter";
import {useEffect, useState} from "react";
import {Message} from "./components/Message";

function App() {
    const [messageList, setMessages] = useState([]);
    let [valueText, setValueText] = useState('');
    let [valueAuthor, setValueAuthor] = useState('');


    const handleUserText = (event) => {
        setValueText(event.target.value);
    };

    const handleAuthorText = (event) => {
        setValueAuthor(event.target.value);
    };

    const handleAddMessage = (event) => {
        event.preventDefault();
        setMessages(prevMessageList => [...prevMessageList, {
            id: Date.now(),
            text: valueText,
            author: valueAuthor
        }]);
    };

    useEffect(() => {
        if (messageList[messageList.length - 1]?.author === 'Andrey') {
            setTimeout(()=>{
                setMessages((prevMessageList) => [...prevMessageList, {text: "I'm BOT", author: "BOT"}]);
            },1500);
        }
    }, [messageList])


    return (
        <div className="App">
            <SimpleText name="Andrey" age={30}/>
            <Counter/>
            <form onSubmit={handleAddMessage}>
                <input type="text" value={valueText} onChange={handleUserText} placeholder="text"/>
                <input type="text" value={valueAuthor} onChange={handleAuthorText} placeholder="author"/>
                <input type="submit" value="Add Message"/>
            </form>

            {messageList.map((message, index) => <Message key={index} textUser={message.text}
                                                          textAuthor={message.author}/>)}
        </div>
    );
}

export default App;
