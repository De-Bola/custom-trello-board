import React from 'react';
import TrelloCard from './TrelloCard';
import ActionButton from './ActionButton';
import { Droppable } from 'react-beautiful-dnd';

const TrelloList = ({ title, cards, listID }) => {
    return (
        <Droppable droppableId={String(listID)}>
            {provided => (
                <div {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={styles.container}>
                    <h4>{title}</h4>
                    {
                        cards.map(
                            (card, index) => <TrelloCard key={card.id} text={
                                card.text
                            } index={index} id={card.id}></TrelloCard>
                        )
                    }
                    <ActionButton listID={listID}></ActionButton>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

const styles = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: 10,
        marginRight: 10,
        height: '100%'
    }
}
export default TrelloList;