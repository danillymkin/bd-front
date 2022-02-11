import React, { FunctionComponent } from 'react';
import { FaCar, FaIndustry, FaFileAlt, FaHandshake } from 'react-icons/fa';

import classes from './Sidebar.module.scss';
import SidebarMenu from '../../ui/Sidebar/SidebarMenu/SidebarMenu';
import { SidebarMenuType } from '../../ui/Sidebar/SidebarMenu/SidebarMenuType';
import SidebarHeader from '../../ui/Sidebar/SidebarHeader/SidebarHeader';

export const Sidebar: FunctionComponent = (): JSX.Element => {
  const menu: SidebarMenuType = [
    {
      name: 'Меню',
      items: [
        {
          name: 'Автомобили',
          to: '/cars',
          icon: <FaCar size={22} />,
        },
        {
          name: 'Производители',
          to: '/manufacturers',
          icon: <FaIndustry size={22} />,
        },
      ],
    },
    {
      name: 'Управление',
      items: [
        {
          name: 'Отчеты',
          to: '/reports',
          icon: <FaFileAlt size={22} />,
        },
        {
          name: 'Договора',
          to: '/contract',
          icon: <FaHandshake size={22} />,
        },
      ],
    },
  ];

  return (
    <aside className={classes.sidebar}>
      <SidebarHeader />
      <SidebarMenu menu={menu} />
    </aside>
  );
};

export default Sidebar;
