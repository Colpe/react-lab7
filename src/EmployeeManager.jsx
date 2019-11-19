import React from 'react'
import ListPeople from './ListPeople'

class EmployeeManager extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        <ListPeople />
        <br />
      </div>
    );
  }
}

export default EmployeeManager