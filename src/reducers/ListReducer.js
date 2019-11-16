import { CONSTANTS } from '../actions'

let listID = 2;
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
        case CONSTANTS.ADD_CARD:
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
        default:
            return state;
    }
};

export default ListsReducer;