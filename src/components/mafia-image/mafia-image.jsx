import styles from './mafia-image.module.scss';
import classNames from 'classnames';

export interface MafiaImageProps {
    className?: string;
}

export const MafiaImage = ({ className }: MafiaImageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://github.com/Liubavaa/mafia-bot/blob/main/public/big_mafia.jpeg?raw=true"
                className={styles.big_image}
            />
        </div>
    );
};
