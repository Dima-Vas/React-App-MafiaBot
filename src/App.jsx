import styles from './App.module.scss';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Layout } from './components/layout/layout';
import { HomeMain } from './components/home-main/home-main';
import { LeaderBoard } from './components/leader-board/leader-board';
import { Game } from './components/game/game';

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomeMain />} />
                        <Route path="leaderboard" element={<LeaderBoard />} />
                        <Route path="game" element={<Game />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
