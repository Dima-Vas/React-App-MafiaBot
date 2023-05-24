import styles from './home-main.module.scss';
import classNames from 'classnames';
import { MafiaImage } from '../mafia-image/mafia-image';
import { GameMenu } from '../game-menu/game-menu';

export interface HomeMainProps {
    className?: string;
}

export const HomeMain = ({ className }: HomeMainProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <MafiaImage />
            <GameMenu />
        </div>
    );
};
