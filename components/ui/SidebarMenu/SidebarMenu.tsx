import React, { FunctionComponent, useState } from 'react';
import { useRouter } from 'next/router';
import { useUpdateEffect } from 'usehooks-ts';

import classes from './SidebarMenu.module.scss';
import { SidebarMenuSection } from '../SidebarMenuSection/SidebarMenuSection';
import { SidebarMenuType } from './SidebarMenuType';
import { SidebarMenuSectionType } from '../SidebarMenuSection/SidebarMenuSectionType';

interface SidebarMenuProps {
  menu: SidebarMenuType;
}

type Props = SidebarMenuProps;

const SidebarMenu: FunctionComponent<Props> = ({ menu }): JSX.Element => {
  const { route } = useRouter();
  const [active, setActive] = useState(route);

  useUpdateEffect(() => {
    setActive(route);
    console.log(active);
  }, [route]);

  return (
    <ul className={classes.list}>
      {menu.map((section: SidebarMenuSectionType) => (
        <SidebarMenuSection
          key={section.name}
          active={active}
          section={section}
        />
      ))}
    </ul>
  );
};

export default SidebarMenu;
