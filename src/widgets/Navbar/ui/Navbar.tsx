import React, {FC} from 'react';
import {classNames} from "shared/lib/helpers";
import styles from './Navbar.module.scss'
import {AppLink} from "shared/ui";
import {ThemeSwitcher} from "features/ThemeSwitcher";


interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
  return (
    <nav className={classNames([styles.Navbar, className])}>
      <ThemeSwitcher />
      <div className={styles.links}>
        <AppLink to='/'>Home</AppLink>
        <AppLink to='/about'>About</AppLink>
      </div>
    </nav>
  );
};