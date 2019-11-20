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
            errors: {
                isParentPhoneNumberValid: true,
                isEmailValid: true
            }
        }
    }
    phoneNumberValidation = () => {
        return this.state.parentPhoneNumber.length === 9 && this.state.parentPhoneNumber.match("[0-9]{9}").length === 1;
    }
    
    emailValidation = () => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.state.email).toLowerCase());
    }


    createNewEmoplyee = (e) => {
        e.preventDefault();
        let v = this.state.errors;

        if (this.state.age >= 18)
            v.isEmailValid = this.emailValidation();
        else
            v.isParentPhoneNumberValid = this.phoneNumberValidation();

        this.setState({
            errors: v
        });
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
                                <span>{this.state.errors.isParentPhoneNumberValid ? "" : "Parent phone number is not valid!"}</span>
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
                                <span>{this.state.errors.isEmailValid ? "" : "Email is not valid!"}</span>
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