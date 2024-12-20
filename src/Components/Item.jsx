import React from 'react'
import './../App.css'
const Item = ({ item, editItem, deleteItem }) => {
    return (
        <div className="item">
            <span className="item-text">{item.text}</span>
            <div className="item-actions">
                <button className="edit-button" onClick={() => editItem(item)}>
                    Edit
                </button>
                <button className="delete-button" onClick={() => deleteItem(item.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};


export default Item