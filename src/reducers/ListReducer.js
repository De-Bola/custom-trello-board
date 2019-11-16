import { CONSTANTS } from '../actions'

var listID = 2;
let cardID = 6;
const initState = [
    {
        title: "Final Lap",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "come to papa"
            },
            {
                id: `card-${1}`,
                text: "come to mama"
            }
        ]
    },
    {
        title: "Results",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: "Touchline gamble"
            },
            {
                id: `card-${3}`,
                text: "Play pupper dumper"
            },
            {
                id: `card-${4}`,
                text: "Fatter than discords"
            },
            {
                id: `card-${5}`,
                text: "Blacker than Jackylne"
            }
        ]
    }
];

const ListsReducer = (state = initState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            }
            listID += 1;
            return [...state, newList];
        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
            };
            cardID += 1;
            const newState = state.map(list => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });
            return newState;
        }
        case CONSTANTS.DRAG_HAPPENED: {
            const {
                droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, type
            } = action.payload;
            const newState = [...state];

            //for list drags
            if (type === 'list') {
                const list = newState.splice(droppableIndexStart, 1);
                newState.splice(droppableIndexEnd, 0, ...list);
                return newState;
            }

            //check if cards are in same list
            if (droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }
            //when cards aren't from same list
            if (droppableIdStart !== droppableIdEnd) {
                //find list where drag happened
                const listStart = state.find(list => droppableIdStart === list.id)

                //take card out of that list
                const card = listStart.cards.splice(droppableIndexStart, 1);

                //find list where drag ends
                const listEnd = state.find(list => droppableIdEnd === list.id);

                //drop card in new list
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);

                ///a good feature additional feature is to be able to drag-n-drop a chain of cards.
            }
            return newState;
        }
        case CONSTANTS.DELETE_LIST:

            {
                const listId = action.payload;

                state.splice(listId, 1);

                return [...state];
            }

        case CONSTANTS.DELETE_CARD:

            const {cardId, listId} = action.payload;

            //var list = 
            state.splice(cardId, 1);

            return [...state];
        default:
            return state;
    }
};

export default ListsReducer;