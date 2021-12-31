import user from '../../assets/img/user.jpg';

import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { BiSearch } from 'react-icons/bi';
import { CgMenuLeft } from 'react-icons/cg';

export default function Navbar() {
  return (
    <nav className='lzs-navbar'>
      <div className='lzs-navbar__search'>
        <div className='toggle-btn'>
          <CgMenuLeft />
        </div>
        <input
          type='search'
          placeholder='Search for results...'
          className='lzs-input'
        />
        <div className='search-btn'>
          <BiSearch />
        </div>
      </div>
      <div className='lzs-navbar__settings'>
        <div className='lzs-navbar__settings--notifications'>
          <IoMdNotificationsOutline />
        </div>
        <div className='lzs-navbar__settings--settings'>
          <IoSettingsOutline />
        </div>
        <div className='lzs-navbar__settings--user'>
          <img src={user} alt='user' />
        </div>
      </div>
    </nav>
  );
}
