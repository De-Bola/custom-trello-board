import React, { Component } from 'react';
import TrelloList from './TrelloList';
import { connect } from "react-redux";
import ActionButton from './ActionButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort, deleteList } from '../actions';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  marginRight: 10
`;

class App extends Component {

  onDragEnd = (result) => {
    //todo reordering logic
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    ));
  };

  onCloseButtonClick = (list) => {
    var _list = list;
    this.props.dispatch(deleteList(
     _list.id
    ));
  }

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className='App'>
          <h1>Hello Bhummie</h1>
          <Droppable droppableId="all-lists" direction='horizontal' type='list'>
            {provided => (
              <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
                {
                  lists.map((list, index) => (
                    <TrelloList
                      listID={list.id}
                      key={list.id}
                      title={list.title}
                      cards={list.cards}
                      index={index}
                      action={this.onCloseButtonClick}
                    />
                  ))}
                {provided.placeholder}
                <ActionButton list />
              </ListContainer>
            )}
          </Droppable>
        </div></DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);