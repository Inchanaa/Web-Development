import { useState } from "react"

export function Count(){
    const [Count, setCount] = useState(0);
    
    const increase = () => {
        setCount(Count + 1)
    };
   const decrease = () => {
        setCount(Count - 1)
    }; 
    const restart = () => {
        setCount(0) 
    };
    return(      
        <div className="count">
            {Count} <br/>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={restart}>restart</button>
        </div>
    );
}