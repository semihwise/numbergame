import { useGame } from "context";
import { usePlay } from "pages/game/Page";
import { useNavigate } from "react-router-dom";
const Guess = ({guess}) => {
    const { setShowNumb} = usePlay();
    const {secretNumber} = useGame();
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
        for (let i in valueArray)
            for (let j in secretNumber) {
                if (valueArray[i] === secretNumber[j]) { bullsAndCows++; } if (valueArray[i] === secretNumber[j])
                    if (i === j) { bulls++; } var cows = bullsAndCows - bulls;
            }
        return cows;
    }
};
export default Guess;
