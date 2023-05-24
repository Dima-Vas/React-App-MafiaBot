import styles from './game.module.scss';
import classNames from 'classnames';
import { LoginForm } from '../login-form/login-form';

export interface GameProps {
    className?: string;
}

export const Game = ({ className }: GameProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <LoginForm playerNumber={1} playerRole={"Sheriff"}/>
        </div>
    );
};
