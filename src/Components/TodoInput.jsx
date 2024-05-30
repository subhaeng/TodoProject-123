import React, { useState } from 'react'
function TodoInput(props) {
    const [inputText, setInputText] = useState(" ");
    return (
        <div className='input-container'>
            <input type="text" className='input-box-todo'
                placeholder='Enter your todo'
                value={inputText} //clear the text
                onChange={e => {
                    setInputText(e.target.value);
                }}
            />
            <button className='add-btn'
                onClick={() => {
                    props.addList(inputText)
                    setInputText("") //clear
                }}>+</button>
        </div>
    );
}
export default TodoInput;
