import { SEARCH_ROBOTS } from "../constants/constant";

const initialStateSearch = {
    searchRobots: "",
};

export const searchRobotsReducer = (
    state = initialStateSearch,
    action = {}
) => {
    switch (action.type) {
        case SEARCH_ROBOTS:
            return Object.assign({}, state, { searchRobots: action.payload });
        default:
            return state;
    }
};
