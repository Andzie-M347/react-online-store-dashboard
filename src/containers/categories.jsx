import { Category } from '../components/category-box';

import { MdDashboardCustomize, MdOutlineShopTwo } from 'react-icons/md';
import { BsShop } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';

export const Categories = () => {
  return (
    <section className='lzs-category'>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12 col-xl-3'>
          <Category
            title='Revenue'
            icon={<MdDashboardCustomize />}
            color='purple'
            duration='Past 12 days'
            price={44.278}
          />
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 col-xl-3'>
          <Category
            title='Sales'
            icon={<BsShop />}
            color='green'
            duration='Past 12 days'
            price={44.278}
          />
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 col-xl-3'>
          <Category
            title='Cost'
            icon={<MdOutlineShopTwo />}
            color='orange'
            duration='Past 12 days'
            price={66.978}
          />
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 col-xl-3'>
          <Category
            title='Total Users'
            icon={<FiUsers />}
            color='blue'
            duration='Past 7 days'
            price={66.978}
          />
        </div>
      </div>
    </section>
  );
};
