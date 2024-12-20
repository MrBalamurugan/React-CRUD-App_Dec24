import React, { useState } from 'react'
import ItemForm from './ItemForm';
import ItemList from './ItemList';
import './../App.css'

const MainEngine = () => {
    const [items, setItems] = useState([]);
    const [editingItem, setEditingItem] = useState(null);

    const addItem = (text) => {
        if (editingItem) {
            // Update item
            setItems(
                items.map((item) =>
                    item.id === editingItem.id ? { ...item, text } : item
                )
            );
            setEditingItem(null);
        } else {
            // Create new item
            const newItem = { id: Date.now(), text };
            setItems([...items, newItem]);
        }
    };

    const editItem = (item) => {
        setEditingItem(item);
    };

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return (
        <div className="app-container">
            <h1>CRUD App</h1>
            <ItemForm addItem={addItem} editingItem={editingItem} />
            <ItemList items={items} editItem={editItem} deleteItem={deleteItem} />
        </div>
    );
};

export default MainEngine