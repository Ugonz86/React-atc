import React from 'react';
import { Link } from 'react-router-dom';

var headerStyle = {
  // display: 'flex',
  // position: 'inline',
  textAlign: 'center',
  verticalAlign: 'middle',
};

function Header() {
//   componentDidMount() {
//     this.props.getUsers();
// }

  return (
    <div style={headerStyle}>
        <h1><b style={{color: 'blue', fontStyle: 'italic'}}>e</b>Bills</h1>
      <nav>
        <Link to="Home">Home</Link> &nbsp;&nbsp; <Link to="/CompanyList">Companies</Link> &nbsp;&nbsp; <Link to="/">Account</Link> &nbsp;&nbsp; <Link to="/login">Logout</Link>
      </nav>
      <hr/>
    </div>
  );
}

export default Header;

