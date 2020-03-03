import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import Header from '../Home/Header';
import Home from '../Home/Home';
// import NewCompanyControl from '../Home/NewCompanyControl';
// import CompanyList from '../Home/CompanyList';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });

  const newMasterCompanyList = {};

  let newCompanyId = v4();
  newMasterCompanyList[newCompanyId] = {
    name:'Seattle Light',
    utility:'Electricity',
    contact:'www.seattle.com',
    
  };
  newCompanyId = v4();
  newMasterCompanyList[newCompanyId] = {
    name:'Seattle Water',
    utility:'Water',
    contact:'www.seattle.com',
   
  };
  newCompanyId = v4();
  newMasterCompanyList[newCompanyId] = {
    name:'Seattle Farm',
    utility:'Insurance',
    contact:'www.seattle.com',
    
  };
  newCompanyId = v4();
  newMasterCompanyList[newCompanyId] = {
    name:'Seattle Auto',
    utility:'Car Dealer',
    contact:'www.seattle.com',
    
  };
  newCompanyId = v4();
  newMasterCompanyList[newCompanyId] = {
    name:'Seattle Fi',
    utility:'Internet',
    contact:'www.seattle.com',
  
  };

  this.state = {
    masterCompanyList: newMasterCompanyList,
    selectedCompany: null
  };
  this.handleAddingNewCompanyToList = this.handleAddingNewCompanyToList.bind(this);
  this.handleChangingSelectedCompany = this.handleChangingSelectedCompany.bind(this);
}

// componentDidMount() {
//   this.waitTimeUpdateTimer = setInterval(() =>
//     this.updateCompanyElapsedWaitTime(),
//   5000
//   );
// }

// componentWillUnmount(){
//   clearInterval(this.waitTimeUpdateTimer);
// }

// updateCompanyElapsedWaitTime() {
//   var newMasterCompanyList = Object.assign({}, this.state.masterCompanyList);
//   Object.keys(newMasterCompanyList).forEach(companyId => {
//     newMasterCompanyList[companyId].formattedWaitTime = (newMasterCompanyList[companyId])(true);
//   });
//   this.setState({masterCompanyList: newMasterCompanyList});
// }

handleAddingNewCompanyToList(newCompany){
  var newCompanyId = v4();
  var newMasterCompanyList = Object.assign({}, this.state.masterCompanyList, {
    [newCompanyId]: newCompany
  });
  newMasterCompanyList[newCompanyId].formattedWaitTime = newMasterCompanyList[newCompanyId](true);
  this.setState({masterCompanyList: newMasterCompanyList});
}

handleChangingSelectedCompany(companyId){
  this.setState({selectedCompany: companyId});
}

  render() {
    const { alert } = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Router history={history}>
              <Switch>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Header/>
                <Route path="/Home" component={Home} />
                {/* <Route path="/NewCompany" render={()=><NewCompanyControl onNewCompanyCreation={this.handleAddingNewCompanyToList} />} /> */}
                {/* <Route path='/CompanyList' render={()=><CompanyList companyList={this.state.masterCompanyList} onCompanySelection={this.handleChangingSelectedCompany}
            selectedCompany={this.state.selectedCompany}/>} /> */}
                {/* <Route path="/CompanyList" render={(props)=><CompanyList companyList={this.state.masterCompanyList} />} /> */}
                <Redirect from="*" to="Home" />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };