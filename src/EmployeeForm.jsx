import React from 'react'

class EmployeeForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: 20,
            email: "",
            parentName: "",
            parentPhoneNumber: "",
            isFormValid: false,
            isParentPhoneNumberValid: true,
            isEmailValid: true
        }
    }
    phoneNumberValidation = (phoneNumber) => {
        return phoneNumber.length === 9 && phoneNumber.match("[0-9]{9}").length === 1;
    }

    emailValidation = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value,
            isEmailValid: this.emailValidation(e.target.value)
        });
    }

    onPhoneNumberChange = (e) => {
        this.setState({
            email: e.target.value,
            isParentPhoneNumberValid: this.phoneNumberValidation(e.target.value)
        });
    }
    validate = () => {
        this.setState(prevState => ({
            isEmailValid: this.emailValidation(prevState.email),
            isParentPhoneNumberValid: this.phoneNumberValidation(prevState.parentPhoneNumber)
        }));
    }

    createNewEmployee = (e) => {
        e.preventDefault();
        this.validate();
    }

    render() {

        return (
            <div>
                <form onSubmit={this.createNewEmployee}>
                    <div className="row">
                        <label>Age</label>
                        <input style={{ margin: "10px" }} defaultValue={this.state.age} type="number" onChange={(e) => { this.setState({ age: e.target.value }) }} />
                    </div>
                    {this.state.age < 18 &&
                        <div>
                            <div className="row">
                                <label>Parent Name</label>
                                <input style={{ margin: "10px" }} onChange={(e) => { this.setState({ parentName: e.target.value }); }} />
                            </div>
                            <div className="row">
                                <label>Parent Phone No.</label>
                                <input style={{ margin: "10px" }} onChange={this.onEmailChange} />
                                <span>{this.state.isParentPhoneNumberValid ? "" : "Parent phone number is not valid!"}</span>
                            </div>
                        </div>
                    }
                    {this.state.age >= 18 &&
                        <div>
                            <div className="row">
                                <label>Name</label>
                                <input style={{ margin: "10px" }} onChange={(e) => { this.setState({ name: e.target.value }); }} />
                            </div>
                            <div className="row">
                                <label>Email</label>
                                <input style={{ margin: "10px" }} onChange={this.onEmailChange} />
                                <span>{this.state.isEmailValid ? "" : "Email is not valid!"}</span>
                            </div>
                        </div>
                    }
                    <button type="submit" disabled={!(this.state.isEmailValid && this.state.age >= 18 || this.state.age < 18 && this.state.isParentPhoneNumberValid)} >Submit</button>
                </form>
            </div>
        );

    }
}

export default EmployeeForm;