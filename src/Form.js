import React, { useState } from 'react';
import moment from 'moment';

function Form( { list, setList }) {
    const focusInput = React.createRef();

    const [inputTitle, setTitle] = useState('');
    const [inputContent, setContent] = useState('');

    const handleTitleChange = event => setTitle(prev => prev = event.target.value);
    const handleContentChange = event => setContent(prev => prev = event.target.value);

    const handleSubmit = event => {
        if (event.key === 'Enter' && inputTitle && inputContent) {

            const newItem = {
                id: Math.max(...list.map(item => item.id)) + 1,
                date: moment().format('DD/MM/YYYY'),
                title: inputTitle,
                content: inputContent,
                done: false
            };
            setList(prev => [...prev, newItem]);

            setTitle('');
            setContent('');

            focusInput.current.focus();
        }
    }

    return (
        <div className="form">
            <form onKeyPress={ handleSubmit }>
                <input 
                    autoFocus
                    ref={ focusInput }
                    type="text"
                    className="form-title" 
                    placeholder='title' 
                    value={ inputTitle }
                    onChange={ handleTitleChange }
                />
                <input 
                    type="text"
                    className="form-content" 
                    placeholder='content' 
                    value={ inputContent }
                    onChange={ handleContentChange }
                />
            </form>
        </div>
    )
}

export default Form;