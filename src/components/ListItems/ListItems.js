import React, { Fragment } from 'react';
import './ListItems.css';

const ListItems = (props) => {
    const {items} = props
    const length = items.length

    const listItems = length ? (
        items.map( item => {
            return(
                <Fragment key={item.id}>
                    <li className="row">
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                        <div>{item.age}</div>
                        <div onClick={() => props.deleteItem(item.id)} className='close'>&times;</div>
                    </li>
                </Fragment>
            )
        })
    )
    :(
        <p className="no-item">There is no item to show.</p>
    )

    return (
        <div>
            <ul id="myUL">
                <li className="row header">
                    <div>ID</div>
                    <div>Name</div>
                    <div>Age</div>
                    <div>Action</div>
                </li>

                {listItems}
            </ul>
        </div>
    );
}

export default ListItems;
