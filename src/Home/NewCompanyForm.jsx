import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function NewCompanyForm(props){
  let _name = null;
  let _utility = null;
  let _contact = null;

  function handleNewCompanyFormSubmission(event) {
    event.preventDefault();
    props.onNewCompanyCreation({name: _name.value, utility: _utility.value, contact: _contact.value, id: v4(), timeAdded: new Moment()});
    _name.value = '';
    _utility.value = '';
    _contact.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewCompanyFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Company Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='utility'
          placeholder='Utility Type'
          ref={(input) => {_utility = input;}}/>
        <textarea
          type='text'
          id='contact'
          placeholder='Contact'
          ref={(input) => {_contact = input;}}/>
        <button type='submit'>Submit New Company</button>
      </form>
    </div>
  );
}

NewCompanyForm.propTypes = {
  onNewCompanyCreation: PropTypes.func
};

export default NewCompanyForm;