
import { useGame } from "context";
import { usePlay } from "pages/game/Page";
import { useState } from "react";
import { Button } from "react-bootstrap";



const NumbrBtns = () => {
    const [value, setValue] = useState("");
    const { items, setItems } = usePlay();
    const { secretNumber, digits} = useGame();
    const handleClick = e => {setValue(value + e.target.value);};
    const delBtn = () =>{setValue(value.substring(0, value.length - 1));};
    const handleChange = e =>{setValue(e.target.value);};

    const handleSubmit = e => {
        e.preventDefault();
        if (!value)
            return;
        setItems([value]);
        setValue("");
        console.log("items:",items);
        console.log("dd:",value); 
        const newGuess = [...items, value];
        setItems(newGuess);
        // if (value.length !== digits){
        //     alert("need more digits");
            
        //     return;
        //     // sorun
        // }

    };
    return (
        <div > 
            
            <form onSubmit={ handleSubmit } className=" btn-group-sm" role="group" >
                <input 
                    className="btn btn-light"
                    onChange={ handleChange }
                    value={ value }
                    placeholder="Enter Your Guess"/>
                <input className="btn btn-success" value={ "Enter" }  type="submit" />   
            </form>   
            <div className=" btn-group-sm" role="group" >
                <button  className="btn btn-outline-success" value = { 0 } onClick={ handleClick }>0</button>
                <button  className="btn btn-outline-success" value = { 1 } onClick={ handleClick }>1</button>
                <button  className="btn btn-outline-success" value = { 2 } onClick={ handleClick }>2</button>
                <button  className="btn btn-outline-success" value = { 3 } onClick={ handleClick }>3</button>
                <button  className="btn btn-outline-success" value = { 4 } onClick={ handleClick }>4</button>
                <button  className="btn btn-outline-success" value = { 5 } onClick={ handleClick }>5</button>
                <button  className="btn btn-outline-success" value = { 6 } onClick={ handleClick }>6</button>
                <button  className="btn btn-outline-success" value = { 7 } onClick={ handleClick }>7</button>
                <button  className="btn btn-outline-success" value = { 8 } onClick={ handleClick }>8</button>
                <button  className="btn btn-outline-success" value = { 9 } onClick={ handleClick }>9</button>
                <button  className="btn btn-outline-success" onClick = { delBtn }> DEL </button> 
            </div>      
        </div>
    );
};
export default NumbrBtns;
