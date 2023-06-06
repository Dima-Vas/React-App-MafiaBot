import styles from './create-user.module.scss';
import classNames from 'classnames';

export interface CreateUserProps {
    className?: string;
}

export const CreateUser = ({ className }: CreateUserProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};
