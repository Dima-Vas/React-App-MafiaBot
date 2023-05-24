import styles from './layout.module.scss';
import classNames from 'classnames';
import { Header } from '../header/header';
import {Outlet} from "react-router-dom";

export interface LayoutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Layout = ({ className }: LayoutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Header />
            <Outlet />
        </div>
    );
};
