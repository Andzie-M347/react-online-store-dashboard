import { Link } from 'react-router-dom';
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

            <li>
              <Link to='/users/'>
                <FiUsers />
                <span>Users</span>
              </Link>
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
