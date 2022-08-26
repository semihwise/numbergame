import { GameProvider } from "context";
import Router  from "pages/Router";
import { BrowserRouter } from "react-router-dom";
const App = () => (
    <GameProvider>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </GameProvider>
);

export default App;
