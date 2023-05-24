import styles from './game.module.scss';
import classNames from 'classnames';
import { LoginForm } from '../login-form/login-form';
import { useState, useEffect } from "react";
import { patchPlayer } from '../../request';

export interface GameProps {
    className?: string;
}

export const Game = ({ className }: GameProps) => {
    const [playerNames, setPlayerNames] = useState(["", "", "", "", "", "", "", "", "", ""]);
    const [timer, setTimer] = useState(60);
    const [isPaused, setIsPaused] = useState(true);
    const [displayedIndices, setDisplayedIndices] = useState([]);
    const [mafiaSet, updateMafiaSet]  = useState([]);
    const [townieSet, updateTownieSet]  = useState([]);

    function shuffleList(list) {
        for (let i = list.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [list[i], list[j]] = [list[j], list[i]];
        }
        return list;
    }

    var basedRoles = ["Sheriff", "Don", "Mafia", "Mafia", "Townie", "Townie", 
                        "Townie", "Townie", "Townie", "Townie", "Townie"];
    const playerRoles = shuffleList(basedRoles);
    const [roles, setRoles] = useState(playerRoles);

    const handleButton1Click = (index) => {
        setDisplayedIndices((prevIndices) => {
            const updatedIndices = [...prevIndices, index];

            // Check if equal number of townie and mafia players or no mafia remaining
            const filteredRoles = playerRoles.filter((_, i) => !prevIndices.includes(i));
            const townieCount = filteredRoles.filter((role) => role === "Townie" || role === "Sheriff").length;
            const mafiaCount = filteredRoles.filter((role) => role === "Mafia" || role === "Don").length;

            if (townieCount <= mafiaCount) {
                console.log("Mafia won");
                townieSet.forEach((i) => {
                    patchPlayer(i, {"gamePlayed" : true, "gameWon" : true, "gameWonAsMafia" : false})
                }
                )
                mafiaSet.forEach( (i) => {
                    patchPlayer(i, {"gamePlayed" : true, "gameWon" : false})
                }
                )
            } else if (mafiaCount == 0){
                console.log("Town won");
                mafiaSet.forEach((i) => {
                    console.log()
                    patchPlayer(i, {"gamePlayed" : true, "gameWon" : true, "gameWonAsMafia" : true})
                }
                )
                townieSet.forEach((i) => {
                    patchPlayer(i, {"gamePlayed" : true, "gameWon" : false})
                })
            }
            return updatedIndices;
        });
    };

    const handleButton2Click = (name) => {
        // Handle the logic for the second button click
        console.log(`Button 2 clicked for ${name}`);
    };

    const filteredPlayerNames = playerNames.filter((_, index) => !displayedIndices.includes(index));

    useEffect(() => {
        let interval = null;

        if (!isPaused && timer > 0) {
            interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [timer, isPaused]);

    const handleStart = () => {
        setIsPaused(false);
    };

    const handlePause = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setTimer(60);
        setIsPaused(true);
    };
    
    const addName = (name: string, index: number) => {
        console.log(name);
        const updatedPlayerNames = [...playerNames]; // Create a copy of the array
        updatedPlayerNames[index-1] = name; // Modify the copy
        setPlayerNames(updatedPlayerNames); // Update the state variable
        if (playerRoles[index-1] == "Sheriff" || playerRoles[index-1] == "Townie"){
            const updatedTownieNames = [...townieSet];
            updatedTownieNames.push(name);
            updateTownieSet(updatedTownieNames);
        } else {
            const updatedMafiaNames =[...mafiaSet];
            updatedMafiaNames.push(name);
            updateMafiaSet(updatedMafiaNames);
        }
        console.log(updatedPlayerNames);
    }

    const RenderLoginForm = (playerNumber: number) => {
        const [showForm, setShowForm] = useState(true);
        const handleFormClose = () => {
            setShowForm(false);
        };
    
        playerNumber = 11-playerNumber;
        const playerRole = playerRoles[playerNumber];
        return (showForm && <LoginForm key={playerNumber} onClose={handleFormClose} playerNumber={playerNumber} playerRole={playerRole} addName={addName}/>);
    };

    const playerNumbers = [1, 2, 3];
    return (
        <div className={classNames(styles.root, className)}>
            {playerNumbers.map((playerNumber) => RenderLoginForm(playerNumber))}

            <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Elliminate</th>
                <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {filteredPlayerNames.map((name, index) => (
                    <tr key={index}>
                        <td>{name}</td>
                        <td>
                        <button onClick={() => handleButton1Click(index)}>Elliminate</button>
                        </td>
                        <td>
                        <button onClick={() => handleButton2Click(name)}>Show Role</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>

            <div className={styles["timer-container"]}>
                <h1 className={styles["timer-text"]}>Timer: {timer} seconds</h1>
                <div className={styles["button-container"]}>
                    {isPaused ? (
                    <button className={styles["start-button"]} onClick={handleStart}>
                        Start
                    </button>
                    ) : (
                    <button className={styles["pause-button"]} onClick={handlePause}>
                        Pause
                    </button>
                    )}
                    <button className={styles["reset-button"]} onClick={handleReset}>
                    Reset
                    </button>
                </div>
            </div>
        </div>
    );
};