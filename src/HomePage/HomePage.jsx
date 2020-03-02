import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }

  render() {
    const { user, users } = this.props;
    return (
      <div style={{textAlign: 'center'}} >
        <h1><b style={{color: 'blue', fontStyle: 'italic'}}>e</b>Bills</h1>

        <h2>Hello {user.username}!</h2>
        <br/>
        {users.loading && <em>Loading users...</em>}
        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
        {users.items &&
        <ul>
          {users.items.map((user, index) =>
            <h4 key={user.id}>
              {user.firstName + ' ' + user.lastName}
              {
                user.deleting ? <em> - Deleting...</em>
                  : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete Your Profile</a></span>
              }
            </h4>
          )}
        </ul>
        }
        <br/>
        <h4 style={{textAlign: 'center'}}>
          <Link to="/Home">User Portal</Link><br/><br/>
          <Link to="/login">Logout</Link>
          
        </h4>
      </div>
    );
  }
}

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete
};

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };