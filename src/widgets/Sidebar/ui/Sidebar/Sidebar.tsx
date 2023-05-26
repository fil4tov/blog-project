import React, {FC, useState} from 'react';
import {classNames} from "shared/lib/helpers";
import styles from './Sidebar.module.scss'
import {ThemeSwitcher} from "features/ThemeSwitcher";
import {Button} from "shared/ui";
import {LangSwitcher} from "features/LangSwitcher";

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev)
  }

  return (
    <div
      className={classNames([styles.Sidebar, className], {
        [styles.collapsed]: isCollapsed
      })}
    >
      <div className={styles.switchers}>
        <Button onClick={toggleCollapse}>{isCollapsed ? 'Open' : 'Close'}</Button>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};