import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// import { loadUsers } from '../../redux/actions/actions';

import loadUsers from '../../redux/actions/actions';

export const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    const fetchUsers = () => {
      axios
        .get('https://fakestoreapi.com/users')
        .then((response) => {
          console.log(response.data.address);
          dispatch(loadUsers.getUsers(response.data));
        })
        .catch((error) => console.log(error));
    };

    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      axios
        .delete(`https://fakestoreapi.com/users/${id}`)
        .then((response) => {
          dispatch(loadUsers.deleteUser(response.data.id));
          dispatch(loadUsers.getUsers(response.data));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <section className='lzs-users'>
      <h4>Users Table</h4>

      <div className='lzs-users__table'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Email address</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                const first_name = user.name.firstname;
                const last_name = user.name.lastname;

                return (
                  <tr key={user.id}>
                    <th scope='row'></th>
                    <th> {`${first_name} ${last_name}`}</th>
                    <th>{user.email}</th>
                    <th>{user.phone}</th>
                    <th className='lzs-users__actions'>
                      <button className='lzs-users__button'>Edit</button>
                      <button
                        className='lzs-users__button'
                        onClick={() => handleDelete(user.id)}
                      >
                        <i className='bi bi-trash'></i>
                      </button>
                    </th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </section>
  );
};
