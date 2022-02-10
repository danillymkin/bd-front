import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import classes from './SidebarMenuItem.module.scss';
import { SidebarMenuItemType } from './SidebarMenuItemType';

interface SidebarMenuItemProps {
  item: SidebarMenuItemType;
}

type Props = SidebarMenuItemProps;

const SidebarMenuItem: FunctionComponent<Props> = ({ item }): JSX.Element => {
  const { name, to, icon } = item;

  return (
    <li className={classes.item}>
      <Link href={to}>
        <a className={classes.link}>
          {icon}
          <span className={classes.name}>{name}</span>
        </a>
      </Link>
    </li>
  );
};

export default SidebarMenuItem;
