import styles from './create-user.module.scss';
import classNames from 'classnames';

export interface CreateUserProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CreateUser = ({ className }: CreateUserProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};
