import { where,query, getDocs, doc, onSnapshot, arrayUnion, updateDoc } from "@firebase/firestore";
import { useGame } from "context";
import { roomColRef } from "helper/Firebase";


import { useNavigate } from "react-router-dom";
const Guess = ({guess}) => {

    const {secretNumber,setShowNumb,roomId} = useGame();
    const valueArray = Array.from((guess), Number);
    const navigate = useNavigate();
    let bulls = 0;
    let bullsAndCows = 0;
    var cows = newFunction();


       
    
    const gameOver = async ()=> {
        alert("congrats!, returning to main page....")
        return new Promise(resolve => {setTimeout(() => {resolve(navigate("/"));}, 1000);
        });
    }// this should be different! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    if(bulls === secretNumber.length)(gameOver())
    return (<div ><p className='GuessNumber'style={{ color: 'darkRed'}}> {valueArray}: + {bulls}  - {cows} </p></div>)
    
    function newFunction() {
        const getResult = [];
        for (let i in valueArray)
            for (let j in secretNumber) {
                if (valueArray[i] === secretNumber[j]) { bullsAndCows++; } if (valueArray[i] === secretNumber[j])
                    if (i === j) { bulls++; } var cows = bullsAndCows - bulls;
            }
            getResult.push(bulls,cows)
     
            console.log(getResult)
        return cows;
    }
};
export default Guess;
