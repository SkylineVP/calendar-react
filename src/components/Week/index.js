import React  from "react";
import Day    from "../Day";
import moment from "moment";

function Week( props ) {
    const {firstDateOfMonth, mode, monday, selectedDate, changeSelectedDate, events} = props;
    const day = moment(monday);
    const days = [];

    for (let i = 0; i < 7; i++) {
        days.push(<Day date={moment(day)}
                       month={firstDateOfMonth.format("M")}
                       mode={mode}
                       changeSelectedDate={changeSelectedDate}
                       selectedDate={selectedDate}
                       events={events.get(day.format("DD-MM-YYYY"))}/>);
        day.add(1, 'd');
    }

    return (
        <div style={{display: "flex", padding: '4px'}}>
            {days}
        </div>
    );

}

export default Week;