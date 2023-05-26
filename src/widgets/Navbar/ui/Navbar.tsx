import React, {FC} from 'react';
import {classNames} from "shared/lib/helpers";
import styles from './Navbar.module.scss'
import {AppLink} from "shared/ui";


interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
  return (
    <header className={classNames([styles.Navbar, className])}>
      <h2>Blog</h2>
      <nav className={styles.links}>
        <AppLink to='/'>Home</AppLink>
        <AppLink to='/about'>About</AppLink>
      </nav>
    </header>
  );
};