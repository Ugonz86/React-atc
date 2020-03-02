import React from 'react';
import { Link } from 'react-router-dom';
import Company from './Company';
import PropTypes from 'prop-types';
// import { v4 } from 'uuid';

const CompanyList = (props) => {
     
  return (
    <div>
      <hr/>
      {Object.keys(props.companyList).map(function(companyId) {
        var company = props.companyList[companyId];
        return <Company
          name={company.name}
          utility={company.utility}
          contact={company.contact}
          formattedWaitTime={company.formattedWaitTime}
          key={companyId}
          companyId={companyId}
          onCompanySelection={props.onCompanySelection}/>;
          
      })}
      
      <Link to='/NewCompany'>Create new company</Link>
     
    </div>
    
  );
  
};


CompanyList.propTypes = {
  companyList: PropTypes.array,
  onCompanySelection: PropTypes.func
};

export default CompanyList;