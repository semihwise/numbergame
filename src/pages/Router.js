import Layout  from "components/Layout";
import { Route, Routes } from "react-router-dom";
import { Game } from "./game";
import MultiPlayer from "./game/MultiPlayer";
import { HomePage } from "./home";
import { JoinGame } from "./join-game";
import RoomIdConfig from "./join-game/RoomIdConfig";
import { NewGamePage } from "./new-game";
import { SingleGame } from "./single-game";
import WaitingRoom from "./WaitingRoom";

const Router = () => (
    <Layout>
        <Routes> 
            <Route index element={ <HomePage /> } />
            <Route path="new-game" element={ <NewGamePage /> } />
            <Route path="join-room" element={ <RoomIdConfig/>} />
            <Route path="single-game" element={ <SingleGame /> } />
            <Route path="single-game/game" element={ <Game /> } />
            <Route path="new-game/:roomId" element={ <MultiPlayer /> } />
        
            <Route path="new-game/waiting-room" element= { <WaitingRoom />} />
            <Route path="join-room/join-game" element={ <JoinGame /> } />
            <Route path="join-room/waiting-room" element={ <WaitingRoom /> } />
            <Route path="join-room/join-game/:roomId" element={ <MultiPlayer /> } />
        </Routes>
    </Layout>
);

export default Router;
