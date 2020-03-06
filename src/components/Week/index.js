import React from "react";
import Day from "../Day";
import moment from "moment";

function Week(props) {
    const {firstDay, mode, monday} = props;
    const day = moment(monday);
    const days = [];
    for (let i = 0; i < 7; i++) {
        days.push(<Day date={moment(day)}
                       month={firstDay.format("M")}
                       mode={mode}/>);
        day.add(1, 'd');
    }
    return <div style={{display: "flex"}}>
        {days}
    </div>;

}

export default Week;