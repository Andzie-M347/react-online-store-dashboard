import { IoChatbubblesOutline } from 'react-icons/io5';
import { BsGrid, BsGraphUp } from 'react-icons/bs';
import { MdOutlineContactSupport } from 'react-icons/md';

import { FiShoppingBag, FiUsers } from 'react-icons/fi';

export const navItems = [
  {
    label: 'Dashboard',
    link: '/',
    icon: <BsGrid />,
  },
  {
    label: 'Sales',
    link: '/sales/',
    icon: <BsGraphUp />,
  },

  {
    label: 'Products',
    link: '/products/',
    icon: <FiShoppingBag />,
  },

  {
    label: 'Users',
    link: '#',
    icon: <FiUsers />,

    subItems: [
      {
        label: 'Users List',
        link: '/users',
      },
      {
        label: 'Create User',
        link: '/user/create',
      },
      {
        label: 'Update User',
        link: '/user/update',
      },
      {
        label: 'Delete User',
        link: '/user/delete',
      },
    ],
  },
];

export const contactData = [
  {
    label: 'Messages',
    link: '/messages/',
    icon: <IoChatbubblesOutline />,
  },
  {
    label: 'Support',
    link: '/support/',
    icon: <MdOutlineContactSupport />,
  },
];
