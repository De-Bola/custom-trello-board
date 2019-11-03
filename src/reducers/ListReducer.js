
const initState = [
    {
        title: "Final Lap",
        id: 0,
        cards: [
            {
            id: 0,
            text: "come to papa"
        }, 
        {
            id: 1,
            text: "come to mama"
        }
    ]
    },
    {
        title: "Reults",
        id: 0,
        cards: [
            {
            id: 0,
            text: "Touchline gamble"
        }, 
        {
            id: 1,
            text: "Play pupper dumper"
        },
        {
            id: 2,
            text: "Fatter than discords"
        }, 
        {
            id: 2,
            text: "Blacker than Jackylne"
        }
    ]
    }
];

const ListsReducer = (state = initState, action) => {
    switch (action.type){
        default: 
        return state;
    }
};

export default ListsReducer;