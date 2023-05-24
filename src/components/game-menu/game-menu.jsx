import styles from './game-menu.module.scss';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddUser } from '../add-user/add-user';
import { Game } from '../game/game';

export interface GameMenuProps {
    className?: string;
}

export const GameMenu = ({ className }: GameMenuProps) => {
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

    const handleAddUserClick = () => {
        setShowForm(true);
    };

    const handleFormClose = () => {
        setShowForm(false);
    };

    const handleStartGameClick = () => {
        navigate('/game');
    };

    return (
        <div className={classNames(styles.root, className)}>
            <h1>Bot that helps the presenter and saves the results</h1>
            <div className={styles.menu_buttons_div}>
                <div>
                    <button className={styles['menu-button']} onClick={handleStartGameClick}>Start Game</button>
                </div>
                <div>
                    <button className={styles['menu-button']} onClick={handleAddUserClick} >Create User</button>
                    {showForm && <AddUser onClose={handleFormClose} />}
                </div>
            </div>
        </div>
    );
};