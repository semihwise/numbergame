
import { useGame } from "context";
import { createContext,useContext, useState } from "react";
import NumbrBtns from "components/NmbrBtns";
import Guess from "components/Guess";
import { Button, Card, Col, Row } from "react-bootstrap";
import { query, where } from "firebase/firestore";
import { roomColRef } from "helper/Firebase";

const MultiPlayer = () => {
    const { userValue ,rivalname,items, roomId, showNumb,setShowNumb,secretNumber} = useGame();


    return (
        <>
         <NumbrBtns />
            <Row> 
                <Col>
                    <Card> 
                         <p>  {userValue}  </p>
                       
                        <ol>{items.map((guess, index) => (<li  key={index} > 
                                    <Guess
                                        index={index}
                                        guess={guess}
                                        key={index} /> </li>))}</ol>
                    </Card>
                </Col>

                <Col>
                    <Card>  
                         <p> {rivalname} </p>
                         {/*buraya rakip oyuncunun hamleleri  gelicek...  */}
                    </Card>
                </Col>
           </Row>
        </> 
    );
}
export default MultiPlayer;
