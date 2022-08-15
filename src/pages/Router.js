import { Layout } from "components";
import { Route, Routes } from "react-router-dom";
import { Game } from "./game";
import { HomePage } from "./home";
import { JoinGame } from "./join-game";
import { NewGamePage } from "./new-game";
import { SingleGame } from "./single-game";

const Router = () => (
    <Layout>
        <Routes> 
            <Route index element={ <HomePage /> } />
            <Route path="new-game" element={ <NewGamePage /> } />
            <Route path="single-game" element={ <SingleGame /> } />
            <Route path="join-game" element={ <JoinGame /> } />
            <Route path="join-game/game" element={ <Game /> } />
            <Route path="single-game/game" element={ <Game /> } />
            <Route path="new-game/game" element={ <Game /> } />
        </Routes>
    </Layout>
);

export default Router;
