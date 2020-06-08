import React, { Component } from 'react'
import './AddItem.css';

class AddItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmitHandel = this.onSubmitHandel.bind(this);

        this.name = React.createRef();
        this.age = React.createRef();
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    onSubmitHandel = (e) => {
        e.preventDefault()
        this.props.addItem(this.state)

        this.setState = ({
            name: '',
            age: ''
        })

        this.name.current.value = '';
        this.age.current.value = '';
        this.name.current.focus();

        console.log(this.state.name);
    }

    render() {
        return (
            <div className="row header">
                <h2>React ToodList App</h2>

                <form onSubmit={this.onSubmitHandel} className="form-inline">
                    
                    <div className="col-md-5">
                        <input type="text" 
                               className="form-control form-control-lg" 
                               id='name' 
                               onChange={this.handleChange}
                               ref={this.name}
                               name='inp_name' 
                               placeholder="Name..." />
                    </div>

                    <div className="col-md-5">
                        <input type="text" 
                               className="form-control form-control-lg" 
                               id='age' 
                               onChange={this.handleChange}
                               ref={this.age}
                               name='inp_age' 
                               placeholder="Age..." />
                    </div>

                    <div className="col-md-2">
                        <input type='submit' name='btnAddItem' className="btn btn-primary addBtn" value='Add' />
                    </div>
   
                </form>
            </div>
        )
    }
}

export default AddItem