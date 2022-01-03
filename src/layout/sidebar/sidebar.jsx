import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import { navItems, contactData } from './sidebarItems';

export const Sidebar = () => {
  const [submenu, setSubmenu] = useState(false);

  const showSubmenu = () => setSubmenu(!submenu);

  return (
    <aside className='lzs-sidebar'>
      <div className='lzs-top-nav'>
        <div className='lzs-top-nav__logo'>
          <Link to='/'>
            <Logo height='20' />
          </Link>
        </div>

        <div className='lzs-top-nav__menu'>
          <ul>
            {navItems.map((item, index) => (
              <li key={index} onClick={item.subItems ? showSubmenu : undefined}>
                <Link
                  to={item.link}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    {item.icon}
                    <span>{item.label}</span>
                  </div>

                  {item.subItems && (
                    <span>{submenu ? <BiChevronUp /> : <BiChevronDown />}</span>
                  )}
                </Link>

                {/* Sub menu */}
                {submenu && item.subItems && (
                  <ul className='lzs-submenu'>
                    {item.subItems.map((item, index) => (
                      <li key={index}>
                        <Link to={item.link}>&raquo; {item.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='lzs-contact'>
        <h4> Teams </h4>

        <ul>
          {contactData.map((contact, index) => (
            <li key={index}>
              <span>{contact.icon}</span>
              <Link to={contact.link}>{contact.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
