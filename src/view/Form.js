import React, { Component } from 'react'

class Form extends Component {
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
        const { title, company_name,description } = this.state;

        return (
            <form>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={this.handleChange} />
                <label>Company Name</label>
                <input
                    type="text"
                    name="company_name"
                    value={company_name}
                    onChange={this.handleChange} />
                <label>Desription</label>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}
export default Form;