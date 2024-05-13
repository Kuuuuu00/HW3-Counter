import { useState } from "react";
import './App.css'
import plusImage from "./image/incre.jpg"
import minusImage from "./image/decre.jpg"
import resetImage from "./image/start.jpg"


const Counter = () => {
    const [count, setCount] = useState(0);
    const [image, setImage] = useState(resetImage);
    
    const onIncrease = () => {
      setImage(plusImage);
      setCount(count => count + 1);
    }

    const onDecrease = () => {
      setImage(minusImage);
      setCount(count => count - 1);
    }

    const onReset = () => {
      setImage(resetImage);
      setCount(0);
    }
  

  return (
    <div className = "container">
       <img src={image} className="hug"/>
       <div className="counter">{count}</div>
       <div className="button-box">
             <button onClick={onIncrease}>+1</button>
             <button onClick={onDecrease}>-1</button>
             <button onClick={onReset}>Reset</button>
       </div>      
    </div>
  );
}
export default Counter;

