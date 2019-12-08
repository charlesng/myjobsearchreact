import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core';


class PostJobForm extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            title: '',
            company_name: '',
            description: ''
        }

        this.state = this.initialState
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value,
        })
    }

    render() {
        const { title, company_name, description } = this.state;

        return (
            <form>
                <TextField
                    id="standard-basic"
                    label="Title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={this.handleChange} />
                <TextField
                    id="standard-basic"
                    label="Company Name"
                    type="text"
                    name="company_name"
                    value={company_name}
                    onChange={this.handleChange} />
                <TextField
                    id="standard-basic"
                    label="Desription"
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.handleChange} />
                <Button variant="contained" color="primary" value="Submit" onClick={this.submitForm}>Submit</Button>
            </form>
        );
    }
}
export default PostJobForm;