import react from 'react';

const Names = () => {
    return(
        <li className="todo-item">
                <span>
                <input type="checkbox" />
                <span className="todo-text">Repeat</span>
                </span>
            <p>...</p>
        </li>
    );
};

export default Names;