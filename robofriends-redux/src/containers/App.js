import { useEffect } from "react";
import { connect } from "react-redux";

import "./../styles/App.css";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import { searchRobotsAction } from "../actions/searchRobotsAction";
import { requestRobotsAction } from "../actions/requestRobotsAction";

const mapStateToProps = (state) => {
    return {
        searchRobots: state.searchRobotsReducer.searchRobots,
        robots: state.requestRobotsReducer.robots,
        isPending: state.requestRobotsReducer.isPending,
        erorr: state.requestRobotsReducer.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) =>
            dispatch(searchRobotsAction(event.target.value)),
        onRequestRobots: () => dispatch(requestRobotsAction()),
    };
};

const App = ({
    onSearchChange,
    searchRobots,
    onRequestRobots,
    robots,
    isPending,
}) => {
    useEffect(() => {
        onRequestRobots();
    }, []);

    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchRobots.toLowerCase());
    });

    return (
        <div className="tc">
            {isPending ? (
                <h1>Loading</h1>
            ) : (
                <>
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox onSearchChange={onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </>
            )}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
