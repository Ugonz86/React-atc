import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { userActions } from '../_actions';


var homeStyle = {
  color: 'black',
  marginBottom: '300px'
};
// class Home extends React.Component {
//   componentDidMount() {
//     this.props.getUsers();
//   }
function Home(){
  // render() {
    return (
      
        <div style={homeStyle}>
        
          <h1>User Portal</h1>
            <p>jksxkcjoskxjcosjxocjidjcoskocjsijcojfojvcoldsjcovjsoicjosjcosjcosjcosjcosjocjsocjsocjosjcosjcosjcosjc</p>          <br/>
          <h2>Insert content here!</h2>
        </div>
      
    );
  }
// }

// function mapState(state) {
//   const { users, authentication } = state;
//   const { user } = authentication;
//   return { user, users };
// }

// const actionCreators = {
//   getUsers: userActions.getAll
// };

// const connectedHome = connect(mapState, actionCreators)(Home);
// export { connectedHome as Home };

export default Home;


 

    