//useEffect =>  A React Hook that lets you perfom side effects in function componets.
//              It can be used to fetch data,directly interacte with the DOM,and More.
//              It runs after the render is committed to the screen.

//useEffect() = React Hook that tells React DO SOME WHEN (pick one):
//1. After the first render or when the Component mounts
//2. After every render or when the components updates
//3. when the component unmounts

//useEffect(function,[dependencies]);
//function: the code to run after the render is committed to the screen.
//dependencies: An array of values that the effect depends on. if any of these values change,the effect will run again.

//useEffect(()=>{}) //runs after every render
//useEffect(()=>{},[]) //runs only after the first render or runs on mount
//useEffect(()=>{},[value]) //runs on mount and when the value changes

//used in
//1. data fetching
//2. Directly interacting eith the DOm
//3. Setting up a subscription
//4. Manually changing the DOM

import React,{useEffect, useState} from "react";
function Mycomponent1(){
    const[count, setCount]=useState(0);

    useEffect(()=>{
        document.title=`Count: ${count}`;
    },[count]);

    function increment(){
        setCount(count+1);
    }
    function decrement(){
        if(count>0){
            setCount(count-1);
        }else{
            return "count can't be less than zero";
        }
    }
    function reset(){
        setCount(0);
    }
    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Mycomponent1