import React, {Component} from 'react';
import TrelloList from './TrelloList';
import {connect} from "react-redux";
import ActionButton from './ActionButton';


class App extends Component{ 
  render() {
    const {lists} = this.props;
  return (
    <div className= 'App'>
      <h1>Hello Bhummie</h1>
      <div style={styles.listsContainer}>
      {
        lists.map(
          list => (
            <TrelloList key={list.id} title={list.title} cards = {
              list.cards
            }/>
          )
        )
      }<ActionButton list />
      </div>
    </div>
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