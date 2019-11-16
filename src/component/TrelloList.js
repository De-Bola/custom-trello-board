import React from 'react';
import TrelloCard from './TrelloCard';
import ActionButton from './ActionButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { Icon, TableHead, TableRow, Table, TableCell } from '@material-ui/core';
import { deleteCard } from '../actions';


const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 3px;
    width: 300px;
    padding: 10px;
    margin-right: 10px;
    height: 100%;
    position: relative;
`;

onCardCloseButtonClick = (cards) => {
    var _cards = cards;
    this.props.dispatch(deleteCard(
     _cards.id
    ));
  }

const TrelloList = ({ title, cards, listID, index, action }) => {
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <ListContainer {...provided.draggableProps}
                    ref={provided.innerRef}
                    //style={styles.container}
                    {...provided.dragHandleProps}>
                    <Droppable droppableId={String(listID)}>
                        {provided => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                <Table><TableHead><TableRow><TableCell allign='left'>
                                    <h4>{title}</h4></TableCell>
                                    <TableCell align='right'>    <Icon style={{
                                        marginLeft: 8,
                                        cursor: 'pointer'
                                    }} onClick={action}
                                    >close
                            </Icon>
                                    </TableCell>
                                </TableRow>
                                </TableHead></Table>

                                {
                                    cards.map((card, index) =>
                                        <TrelloCard
                                            key={card.id}
                                            text={card.text}
                                            index={index}
                                            id={card.id}
                                            closeAction={this.onCardCloseButtonClick(card.id)}>
                                        </TrelloCard>
                                    )
                                }
                                {provided.placeholder}
                                <ActionButton listID={listID} />
                            </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>
    );
}

// const styles = {
//     container: {
//         backgroundColor: "#dfe3e6",
//         borderRadius: 3,
//         width: 300,
//         padding: 10,
//         marginRight: 10,
//         height: '100%'
//     }
// }
export default TrelloList;