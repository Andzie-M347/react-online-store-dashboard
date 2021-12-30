import { Fragment } from 'react';
import { Categories } from './containers';
import { Layout } from './layout';

export const App = () => {
  return (
    <Fragment>
      <Layout>
        <Categories />
      </Layout>
    </Fragment>
  );
};
