import React from 'react'



class Employee extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            removing: false
        }

    }

    componentDidMount() {

    }
    deleteEmployee = () => {
        this.setState({
            removing: true
        });

        fetch('http://localhost:3000/employees/' + this.props.person.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then(response => {
                response.json();
                this.props.reload();
            })
    }
    render() {
        if (this.state.removing)
            return (<tr>
                <td>Removing...</td>
            </tr>);

        return (
            <tr style={{ backgroundColor: this.props.person.isActive ? "white" : "red" }}>
                <td style={{ width: "200px" }}>{this.props.person.id}</td>
                <td style={{ width: "100px" }}>{this.props.person.age}</td>
            </tr>
        );
    }
}

export default Employee;