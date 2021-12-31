import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

import { IoChatbubblesOutline } from 'react-icons/io5';
import { BsGrid, BsGraphUp } from 'react-icons/bs';
import { MdOutlineContactSupport } from 'react-icons/md';

import { FiShoppingBag, FiUsers } from 'react-icons/fi';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

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
            <li>
              <Link to='/'>
                <BsGrid />
                <span> Dashboard </span>
              </Link>
            </li>

            <li>
              <Link to='/sales/'>
                <BsGraphUp />
                <span> Sales </span>
              </Link>
            </li>

            <li>
              <Link to='/products/'>
                <FiShoppingBag />
                <span> Products </span>
              </Link>
            </li>

            <li onClick={showSubmenu}>
              <Link
                to='/users/'
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <FiUsers />
                  <span>Users</span>
                </div>

                <span>{submenu ? <BiChevronUp /> : <BiChevronDown />}</span>
              </Link>

              {submenu && (
                <ul className='lzs-submenu'>
                  <li>
                    <Link to='/user/create/'> &raquo; Create User</Link>
                  </li>
                  <li>
                    <Link to='/user/delete/'> &raquo; Delete User</Link>
                  </li>
                  <li>
                    <Link to='/user/update/'> &raquo; Update User</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='lzs-contact'>
        <h4> Teams </h4>

        <ul>
          <li>
            <span>
              <IoChatbubblesOutline />
            </span>
            <Link to='/messages/'>Messages</Link>
          </li>
          <li>
            <Link to='/support'>
              <MdOutlineContactSupport />
              <span> Support </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
