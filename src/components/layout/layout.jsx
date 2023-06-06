import styles from './layout.module.scss';
import classNames from 'classnames';
import { Header } from '../header/header';
import {Outlet} from "react-router-dom";

export interface LayoutProps {
    className?: string;
}

export const Layout = ({ className }: LayoutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Header />
            <Outlet />
        </div>
    );
};
