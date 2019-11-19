import React from 'react'
import ListPeople from './ListPeople'
import EmployeeForm from './EmployeeForm'

const modes = {
  list: 'list',
  create: 'create',
}

class EmployeeManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: modes.create
    }

  }

  changeMode = (m) => {
    this.setState({
      mode: m
    })
  }


  render() {
    console.log(this.state.mode)
    return this.state.mode === modes.list ? (
      <div>
        <ListPeople />
        <br />
        <button onClick={() => { this.changeMode(modes.create); }} >Add employee</button>
      </div>
    ) :
      (
        <div>
          <EmployeeForm
            returnToList={()=>this.changeMode(modes.list)}
          />
        </div>
      );
  }
}

export default EmployeeManager