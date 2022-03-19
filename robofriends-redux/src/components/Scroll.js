const Scroll = ({ children }) => {
    return (
        <div
            style={{
                overflow: "scroll",
                border: "1px solid black",
                height: "800px",
            }}
        >
            {children}
        </div>
    );
};

export default Scroll;
