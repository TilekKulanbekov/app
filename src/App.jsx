import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Game from "./pages/game/Game";
import Scores from "./pages/scores/Scores";
import Modal from "./pages/modal/Modal";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Modal/>}/>
                <Route path="/game" element={<Game/>}/>
                <Route path="/scores" element={<Scores/>}/>
            </Routes>
        </Router>
    );
}

export default App;
