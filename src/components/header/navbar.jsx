import { Link } from 'react-router-dom';

import user from '../../assets/img/user.jpg';

import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { BiSearch } from 'react-icons/bi';
import { CgMenuLeft } from 'react-icons/cg';

import notifications from './notifications.json';

import userData from './user.json';

import { Dropdown } from '../dropdown/dropdown';
import { ThemeSettings } from './settings/theme-settings';

const renderNotifications = (item, index) => (
  <div className='notification-item' key={index}>
    <div className='notification-item__icon'>
      <span>
        <i className={item.icon}></i>
      </span>
    </div>

    <div className='notification-item__content'>
      <h5>{item.content}</h5>
      <small>{item.days}</small>
    </div>
  </div>
);

const current_user = {
  username: 'Andzie',
  image: user,
};

const renderUser = (user) => (
  <div className='lzs-navbar__settings--user'>
    <img src={user.image} alt='' />
  </div>
);

const renderUserContent = (item, index) => (
  <div className='user-item' key={index}>
    <header className='user-header'>
      <h5> {item.username}</h5>
      <small>{item.role} </small>
    </header>

    <div className='user-item-content' style={{ alignItems: 'center' }}>
      <div className='user-item-content__icon' style={{ marginRight: 15 }}>
        <i className='bi bi-box-arrow-left'></i>
      </div>
      <div className='user-item-content__content'>
        <h5>
          <Link to='/logout'> Sign Out </Link>
        </h5>
      </div>
    </div>
  </div>
);

export default function Navbar() {
  return (
    <nav className='lzs-navbar'>
      {/* Search box */}
      <div className='lzs-navbar__search'>
        <div className='toggle-btn'>
          <CgMenuLeft />
        </div>
        <input
          type='text'
          placeholder='Search for results...'
          className='lzs-input'
        />
        <div className='search-btn'>
          <BiSearch />
        </div>
      </div>

      {/* Setting box */}
      <div className='lzs-navbar__settings'>
        <div className='lzs-navbar__settings--notifications'>
          <Dropdown
            icon={<IoMdNotificationsOutline />}
            badge={3}
            content={notifications}
            renderItems={(item, index) => renderNotifications(item, index)}
            renderFooter={() => (
              <Link to='/notifications'>View all Notification</Link>
            )}
          />
        </div>
        <div className='lzs-navbar__settings--setting'>
          <ThemeSettings icon={<IoSettingsOutline />} />
        </div>
        <div className='lzs-navbar__settings--user'>
          <Dropdown
            toggleMenu={() => renderUser(current_user)}
            content={userData}
            renderItems={(item, index) => renderUserContent(item, index)}
          />
        </div>
      </div>
    </nav>
  );
}
