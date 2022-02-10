import React, { FunctionComponent } from 'react';

import classes from './SidebarMenu.module.scss';
import { SidebarMenuSection } from '../SidebarMenuSection/SidebarMenuSection';
import { SidebarMenuType } from './SidebarMenuType';
import { SidebarMenuSectionType } from '../SidebarMenuSection/SidebarMenuSectionType';

interface SidebarMenuProps {
  menu: SidebarMenuType;
}

type Props = SidebarMenuProps;

const SidebarMenu: FunctionComponent<Props> = ({ menu }): JSX.Element => {
  return (
    <ul className={classes.list}>
      {menu.map((section: SidebarMenuSectionType) => (
        <SidebarMenuSection key={section.name} section={section} />
      ))}
    </ul>
  );
};

export default SidebarMenu;
