import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <input type="submit" value="Click" onClick={() => setCount(count + 1)}/>
            <br/>
            <span>{count}</span>
        </div>

    )
}