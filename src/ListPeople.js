import React from 'react'
import Employee from './Employee'



class ListPeople extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.setData();
    }

    setData = () => {
        fetch("http://localhost:3000/employees")
            .then(resp => {
                return resp.json();
            })
            .then(source => {
                console.log(source)
                this.setState({
                    dataSource: source,
                    isLoading: false
                });
            }
            );
    }


    reload = () => {
        this.setState({
            dataSource: [],
            isLoading: true
        })
        this.setData();
    }

    render() {
        return this.state.isLoading ?
            (<div>
                <h2>Employees List</h2>
                <p>Loading...</p>
            </div>
            )
            :
            (<div>
                <h2>Employees List</h2>
                <table style={{marginLeft:"100px"}}>
                    <thead>
                        <tr>
                            <td style={{ width: "200px" }}>Id</td>
                            <td style={{ width: "100px" }}>Age</td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.dataSource.map(p => {
                                return <Employee
                                    key={p.id}
                                    person={p}
                                    reload={this.reload}
                                />
                            })
                        }
                    </tbody>
                </table>
            </div>
            );
    }
}

export default ListPeople;