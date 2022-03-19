import { SEARCH_ROBOTS } from "../constants/constant";

export const searchRobotsAction = (text) => ({
    type: SEARCH_ROBOTS,
    payload: text,
});
