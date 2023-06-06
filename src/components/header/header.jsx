import styles from './header.module.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import classNames from 'classnames';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h3>Mafia bot</h3>
            <nav className={styles.nav}>
                <a href="/" className={styles.nav_link}>
                    Home
                </a>
                <a href="/game" className={styles.nav_link}>
                    StartGame
                </a>
                <a className={styles.nav_link} href="/leaderboard">
                    Leaderboard
                </a>
            </nav>
        </div>
    );
};
