import { Fragment } from 'react';
import { Layout } from './layout';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import {
  Support,
  Messages,
  Users,
  CreateUser,
  UpdateUser,
  DeleteUser,
  Dashboard,
  Sales,
  Products,
} from './pages';

export const App = () => {
  return (
    <Fragment>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route path='/sales' element={<Sales />} />
            <Route path='/products' element={<Products />} />
            <Route path='/users' element={<Users />} />
            <Route path='/user/create' element={<CreateUser />} />
            <Route path='/user/update' element={<UpdateUser />} />
            <Route path='/user/delete' element={<DeleteUser />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/support' element={<Support />} />
          </Routes>
        </Layout>
      </Router>
    </Fragment>
  );
};
