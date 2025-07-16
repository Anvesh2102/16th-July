// hooks: Special Function that allows functional components to use state and other react features without writing a class component(React 16.8+)


import React,{useState} from "react";

function Mycomponent(){
    const [name, setName]=useState();
    const [age, setAge]=useState(20);
    const [isEmployed, setIsEmployed]=useState();
    const [num, setNum]=useState(0);

    const changeName=()=>{
        setName("Anvesh");
    }
    const changeAge=()=>{
        setAge(age+1);
    }
    const EmployedStatus=()=>{
        setIsEmployed(!isEmployed);
    }
    const increment=()=>{
        setNum(num+1);
    }
    const decreament=()=>{
        setNum(num-1);
    }
    const reset=()=>{
        setNum(0);
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={changeName}>Click ME!!</button>
            <p>Age: {age}</p>
            <button onClick={changeAge}>Click</button>
            <p>Employee: {isEmployed ? "yes":"no"}</p>
            <button onClick={EmployedStatus}>yes/no</button>
            <p>Number: {num}</p>
            <button onClick={increment}>Add</button>
            <button onClick={decreament}>Remove</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default Mycomponent;