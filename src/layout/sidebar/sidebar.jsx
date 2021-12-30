import { ReactComponent as Logo } from '../../assets/img/logo.svg';

import { IoChatbubblesOutline } from 'react-icons/io5';
import { BsGrid, BsGraphUp } from 'react-icons/bs';
import { MdOutlineContactSupport } from 'react-icons/md';

import { FiShoppingBag, FiUsers } from 'react-icons/fi';

export const Sidebar = () => {
  return (
    <aside className='lzs-sidebar'>
      <div className='lzs-top-nav'>
        <div className='lzs-top-nav__logo'>
          <a href='#'>
            <Logo height='20' />
          </a>
        </div>

        <div className='lzs-top-nav__menu'>
          <ul>
            <li>
              <a href='#'>
                <BsGrid />
                <span> Dashboard </span>
              </a>
            </li>

            <li>
              <a href='#'>
                <BsGraphUp />
                <span> Sales </span>
              </a>
            </li>

            <li>
              <a href='#'>
                <FiShoppingBag />
                <span> Products </span>
              </a>
            </li>

            <li>
              <a href='#'>
                <FiUsers />
                <span>Users</span>
              </a>
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
            <a href='#'>Messages</a>
          </li>
          <li>
            <a href='#'>
              <MdOutlineContactSupport />
              <span> Support </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
