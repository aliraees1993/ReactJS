import {
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAIL,
} from "../constants/constant";

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: "",
};

export const requestRobotsReducer = (
    state = initialStateRobots,
    action = {}
) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {
                robots: action.payload,
                isPending: false,
            });
        case REQUEST_ROBOTS_FAIL:
            return Object.assign({}, state, {
                error: action.payload,
                isPending: false,
            });
        default:
            return state;
    }
};
