import React from 'react';
import PropTypes from 'prop-types';
// import Moment from 'moment';
// import { connect } from 'react-redux';
// import { userActions } from '../_actions';

function Company(props){
  const companyInformation =
    <div>
      <h4>{props.utility}</h4>
      <h4><em>{props.contact}</em></h4>
      <h5>{props.formattedWaitTime}</h5>
    </div>;
  return (
    <div onClick={() => {props.onCompanySelection(props.companyId);}}>
    
      {companyInformation}
      <hr/>
      console.log({companyInformation});
    </div>
    
  );
}

// function displayTimeAdded(timeAdded) {
//     return timeAdded.from(new Moment(), true);
//   }

Company.propTypes = {
  name: PropTypes.string.isRequired,
  utility: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  onCompanySelection: PropTypes.func,
  companyId: PropTypes.string.isRequired
//   timeAdded: PropTypes.instanceOf(Moment).isRequired
};

export default Company;