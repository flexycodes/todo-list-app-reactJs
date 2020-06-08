import React, { useState, useRef } from 'react'
import './AddItem.css';

const AddItem = (props) => {

    const [item, setItem] = useState({
        name: '',
        age: ''
    });

    const inputName = useRef(null);
    const inputAge  = useRef(null);
    
    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        // Form submission logic here.
        props.addItem(item)

        setItem({
            name: '',
            age: ''
        });

        inputName.current.value = '';
        inputAge.current.value = '';
        inputName.current.focus();
    }

    return (
        <div className="row header">
            <h2>React ToodList App</h2>

            <form className="form-inline">
                
                <div className="col-md-5">

                    <input type="text" 
                            className="form-control form-control-lg" 
                            id='name' 
                            value={item.name}
                            onChange={handleChange}
                            ref={inputName}
                            name='name' 
                            placeholder="Name..." />
                </div>

                <div className="col-md-5">
                    <input type="text" 
                            className="form-control form-control-lg" 
                            id='age' 
                            value={item.age}
                            onChange={handleChange}
                            ref={inputAge}
                            name='age' 
                            placeholder="Age..." />
                </div>

                <div className="col-md-2">
                <button type='submit' onClick={handleSubmit}>Add</button>
                </div>

            </form>
        </div>
    )
}

export default AddItem