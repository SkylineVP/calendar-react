import React, {Component} from "react";
import Day from "../Day";
import moment from "moment";

function Week(props) {
    const day=moment(props.monday);
    const days=[];
    for (let i=0;i<7;i++) {
            days.push(<Day  date={moment(day)} month={props.firstDay.format("M")} mode={props.mode}/>);
            day.add(1,'d');
    }
    return <div style={{display:"flex"}}>
        {days}
    </div>;

}

export default Week;