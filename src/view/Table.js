import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Title</th>
                <th>Company Name</th>
                <th>Description</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.jobs.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.title}</td>
                <td>{item.company_name}</td>
                <td>{item.description}</td>
                <td><button onClick={() => props.removeJobListener(item.id)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { jobs, removeJobListener } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody jobs={jobs} removeJobListener={removeJobListener} />
            </table>
        )
    }
}

export default Table