import React from 'react'
import Item from './Item';
import './../App.css'
const ItemList = ({ items, editItem, deleteItem }) => {
    return (
        <div className="item-list">
            {items.length > 0 ? (
                items.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        editItem={editItem}
                        deleteItem={deleteItem}
                    />
                ))
            ) : (
                <p className="empty-message">No items found. Add some!</p>
            )}
        </div>
    );
};

export default ItemList