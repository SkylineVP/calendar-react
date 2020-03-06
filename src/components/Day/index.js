import React from "react";
import moment             from "moment";
import {MODE_CALENDAR} from "../../constants";

function EventItem(props) {

    return <div></div>

}

function Day(props) {
    const {date, event,mode,month} = props;
    const day=moment(date);
    const dayView = mode===MODE_CALENDAR.MONTH?
        day.format("M")===month&&day.format("D")
        :day.format("D");

    return   <div style={{padding:"10px", flex:1,textAlign:"center"}}>
        <div>
            {dayView}
        </div>
        {/* {event.map(item => <EventItem item={item}/>)}*/}
    </div>;
}

export default Day