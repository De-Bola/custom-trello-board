import React from 'react';
import TrelloCard from './TrelloCard';

const TrelloList = ({title, cards}) => {
    return(
        <div style={styles.container}>
        <h4>{title}</h4>
        {
            cards.map(
                card => <TrelloCard text={
                    card.text
                }></TrelloCard>
            )
        }
        </div>
    )
}

const styles={
    container:{
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: 10,
        marginRight: 10
    }
}
export default TrelloList;