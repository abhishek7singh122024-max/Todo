import react from 'react';

const Item = () => {
    return(
        <li className="todo-item">
                <span>
                <input type="checkbox" />
                <span className="todo-text">Sleep</span>
                </span>
            <p>...</p>
        </li>
    );
};

export default Item;