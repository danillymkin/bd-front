import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import classes from './SidebarMenuItem.module.scss';
import { SidebarMenuItemType } from './SidebarMenuItemType';
import classNames from 'classnames/bind';

interface SidebarMenuItemProps {
  item: SidebarMenuItemType;
  active: string;
}

type Props = SidebarMenuItemProps;

const cx = classNames.bind(classes);

const SidebarMenuItem: FunctionComponent<Props> = ({
  item,
  active,
}): JSX.Element => {
  const { name, to, icon } = item;

  const isActive = to === active;

  return (
    <li className={cx({ item: true, activeItem: isActive })}>
      <Link href={to}>
        <a className={cx({ link: true, activeLink: isActive })}>
          {icon}
          <span className={classes.name}>{name}</span>
        </a>
      </Link>
    </li>
  );
};

export default SidebarMenuItem;
