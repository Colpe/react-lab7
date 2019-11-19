import React from 'react'

class EmployeeForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: 20,
            isActive: true,
            company: "",
            email: "",
            loading: false,
            parentName: "",
            parentPhoneNumber: ""
        }
    }

    createNewEmoplyee = () => {
        console.log("creation")
        // this.setState({
        //     loading: true
        // })
        // const employee = {
        //     name: this.state.name,
        //     age: this.state.age,
        //     isActive: this.state.isActive,
        //     company: this.state.company,
        //     email: this.state.email,
        //     parentName: "",
        //     parentPhoneNumber: ""
        // }

        // fetch('http://localhost:3000/employees', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify(employee)
        // })
        //     .then(response => {
        //         response.json();
        //         this.props.returnToList();
        //     })
    }

    render() {
        if (this.state.loading) {
            return (
                <label>Saving...</label>
            )
        }
        return (
            <div>
                <form onSubmit={this.createNewEmoplyee}>
                    <div className="row">
                        <label>Age</label>
                        <input style={{ margin: "10px" }} defaultValue={this.state.age} type="number" onChange={(e) => { this.setState({ age: e.target.value }) }} />
                    </div>
                    {this.state.age < 18 &&
                        <div>
                            <div className="row">
                                <label>Parent Name</label>
                                <input style={{ margin: "10px" }} onChange={(e) => { this.setState({ parentName: e.target.value }) }} />
                            </div>
                            <div className="row">
                                <label>Parent Phone No.</label>
                                <input style={{ margin: "10px" }} onChange={(e) => { this.setState({ parentPhoneNumber: e.target.value }) }} />
                            </div>
                        </div>
                    }
                    {this.state.age >= 18 &&
                        <div>
                            <div className="row">
                                <label>Name</label>
                                <input style={{ margin: "10px" }} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                            </div>
                            <div className="row">
                                <label>Email</label>
                                <input style={{ margin: "10px" }} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                            </div>
                        </div>
                    }
                    <button type="submit" >Submit</button>
                </form>
            </div>
        );
    }
}

export default EmployeeForm;