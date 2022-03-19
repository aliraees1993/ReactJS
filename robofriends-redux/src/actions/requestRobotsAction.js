import {
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAIL,
} from "../constants/constant";

export const requestRobotsAction = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) =>
            dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data })
        )
        .catch((error) =>
            dispatch({ type: REQUEST_ROBOTS_FAIL, payload: error })
        );
};
