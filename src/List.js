import React from 'react';
import ListItem from './ListItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function List( { list, setList } ) {

    const handleClick = (id) => {
        const [currentItem] = list.filter(listItem => listItem.id === id);
        let updatedItems = [];

        if (!currentItem.done) {
            currentItem.done = true;
            list.map(listItem => listItem.id === id ? updatedItems.push(currentItem) : updatedItems.push(listItem));
        } else {
            // updatedItems.push(...list.filter(listItem => listItem.id !== id));
            list.map(listItem => listItem.id !== id && updatedItems.push(listItem));
        }

        setList(prev => prev = updatedItems);
    }

    return (
        <div className="list">
            <TransitionGroup component="ul">
                {list.map(listItem => (
                    //  this is sooo bad
                    listItem.id && (
                        <CSSTransition 
                            key={ listItem.id } 
                            timeout={300} 
                            classNames="list-item"
                        >
                            <ListItem 
                                id={ listItem.id }
                                date={ listItem.date }
                                title={ listItem.title }
                                content={ listItem.content }
                                done={ listItem.done }
                                handleClick={ handleClick }
                            />
                        </CSSTransition>
                ))).reverse()}
            </TransitionGroup>

            <ul>
                
            </ul>
        </div>
    )
}

export default List;