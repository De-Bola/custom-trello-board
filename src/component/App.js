import React, { Component } from 'react';
import TrelloList from './TrelloList';
import { connect } from "react-redux";
import ActionButton from './ActionButton';
import { DragDropContext } from 'react-beautiful-dnd';


class App extends Component {

  onDragEnd = () => {
    //todo reordering logic
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className='App'>
          <h1>Hello Bhummie</h1>
          <div style={styles.listsContainer}>
            {
              lists.map(
                list => (
                  <TrelloList listID={list.id} key={list.id} title={list.title} cards={
                    list.cards
                  } />
                )
              )
            }<ActionButton list />
          </div>
        </div></DragDropContext>
    );
  }
}

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);