import React from 'react'
function TodoList(props) {
    return (
        <div className='list-item'>
            {props.item}
            <span className='icons'>
                <i className="fa-sharp fa-solid fa-trash icon-delete"
                    onClick={e =>
                        props.deleteItem(props.index)}></i>
            </span>
        </div>
    );
}
export default TodoList;