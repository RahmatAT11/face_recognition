import React from "react";

const Rank = (props) => {
    return (
        <div>
            <div className="white fa3">
                {`${props.name}, your current rank is...`}
            </div>
            <div className="white fa1">
                {`${props.entries}`}
            </div>
        </div>
    );
}

export default Rank;