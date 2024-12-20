import React, { useEffect, useState } from 'react'
import './../App.css'
const ItemForm = ({ addItem, editingItem }) => {
    const [input, setInput] = useState('');

    useEffect(() => {
        if (editingItem) {
            setInput(editingItem.text);
        } else {
            setInput('');
        }
    }, [editingItem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addItem(input);
            setInput('');
        } else {
            alert('Please enter valid text.');
        }
    };

    return (
        <form className="item-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={editingItem ? 'Edit item...' : 'Add new item...'}
                className="item-input"
            />
            <button type="submit" className="item-button">
                {editingItem ? 'Update' : 'Add'}
            </button>
        </form>
    );
};

export default ItemForm